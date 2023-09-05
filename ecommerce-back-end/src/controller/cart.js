const Cart = require('../models/cart');

exports.addItemToCart = (req, res) => {
    Cart.findOne({user: req.user}).then((cart, err) => {
        if(err) {
            res.status(400).json({
                err
            })
        }

        if(cart) {
            const product = req.body.cartItems.product;
            const item = cart.cartItems.find(c => c.product == product);
            let condition, action; 
            if(item) {
                condition = {user: req.user._id, "cartItems.product": product};
                action = {
                    "$set": {
                        "cartItems.$": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                };
            } else {
                // if cart already exists then update cart
                condition = {user: req.user._id};
                action = {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                }
            }
            Cart.findOneAndUpdate(condition, action).then((cart, err) => {
                if(cart) {
                    res.status(200).json({
                        message: "Cart updated successfully!",
                        cart
                    })
                }
                if(err) {
                    res.status(400).json({
                        message: "cart has error when update"
                    })
                }
            })
        } else {
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            })
            return cart.save().then((cart, err) => {
                if(cart) {
                    res.status(201).json({
                        message: "New cart added successfully",
                        cart
                    })
                }
                if(err) {
                    res.status(400).json({
                        cart
                    })
                }
                
            })
        }
    })
   
}