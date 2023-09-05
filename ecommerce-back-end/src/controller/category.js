const Category = require('../models/category');
const slugify = require('slugify');
function createCategoryList(categories, parentID = null) {
    const categoryList = [];
    let category;
    if(parentID == null) {
        category = categories.filter(cat => cat.parentID == undefined);
    } else {
        category = categories.filter(cat=>cat.parentID == parentID);
    }
    for(cat of category) {
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: createCategoryList(categories, cat.id)
        });
    }
    return categoryList;    
}
exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.file) {
        categoryObj.categoryImage = process.env.API+ '/public/' + req.file.filename;
    }
    if(req.body.parentID) {
        categoryObj.parentID = req.body.parentID
    }

    const cat = new Category(categoryObj);
    return cat.save().then((cat) => {
        if(cat) {
            res.status(201).json({
                category: cat,
                message: "Category created succesfully"
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
        if(categories) {
            const categoryList = createCategoryList(categories);
            res.status(200).json({
                categoryList
            })
        }
    })
}