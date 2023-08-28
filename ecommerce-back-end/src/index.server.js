const express = require("express");
const env = require('dotenv');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const  authRoutes = require("./routes/auth");
const  adminRoutes = require("./routes/admin/auth");

/**
 * Environment variable support
 */
env.config();
// mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_DATABASE}.h5xtuks.mongodb.net/`).then(() => {
    console.log('database connected');
});

app.use(bodyParser());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
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