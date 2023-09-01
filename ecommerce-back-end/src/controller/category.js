const Category = require('../models/category');
const slugify = require('slugify');
exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.body.parentID) {
        categoryObj.parentID = req.body.parentID
    }

    const cat = new Category(categoryObj);
    return cat.save().then((cat) => {
        if(cat) {
            res.status(201).json({
                message: "Category created succesfully",
                category: cat
            })
        }
    }).catch((error) => {
        res.status(200).json({
            error: error
        })
    })
}

exports.getCategories = (req, res) => {
    Category.find({}).then((categories, error) => {
        if(error) res.status(400).json({message: "category not found"})
        if(categories) [
            res.status(200).json({
                categories
            })
        ]
    })
}