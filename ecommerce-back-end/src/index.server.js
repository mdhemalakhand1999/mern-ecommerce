const express = require("express");
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const  authRoutes = require("./routes/auth");
const categoryRoutes = require('./routes/category');
const  adminRoutes = require("./routes/admin/auth");
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const path = require('path');
const cors = require('cors');


/**
 * Environment variable support
 */
env.config();
// mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_DATABASE}.h5xtuks.mongodb.net/`).then(() => {
    console.log('database connected');
});

app.use(cors())
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.get('/', function(req, res, next) {
    res.status(200).json({
        message: "Hello from server"
    });
})

app.post('/data', function(req, res) {
    res.status(200).json({
        message: req.body
    });
}) 


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});