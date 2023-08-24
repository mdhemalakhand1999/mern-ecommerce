const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        min: 2,
        max: 20
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        min: 2,
        max: 20
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String
    }
}, {timestamps: true});

userSchema.virtual('password').set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10);
})

userSchema.method = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}
module.exports = mongoose.model("User", userSchema);