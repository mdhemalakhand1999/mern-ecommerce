const Product = require('../models/product');
const shortid = require('shortid')
const slugify = require('slugify')

exports.createProduct = (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body })
    const {name, quantity, price, description, category} = req.body
    let productPictures = [];
    if(req.files.length > 0) {
        productPictures = req.files.map(item => {
            return {img: item.filename}
        })
    }


    const product = new Product({
        name,
        slug: slugify(name),
        price,
        description,
        productPictures,
        quantity,
        category,
        createdBy: req.user._id
    });


    return product.save().then((product, err) => {
        if(product) {
            res.status(200).json({
                product,
                message: "Product created successfully"
            })
        } else {
            res.status(500).json({
                err
            })
        }
    })
}