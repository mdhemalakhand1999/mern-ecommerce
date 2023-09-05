const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        trim: true
    },
    categoryImage: {
        type: String
    },
    parentID: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Category', categorySchema);