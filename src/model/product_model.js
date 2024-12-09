const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
    brand: {
        type: String
    },
    productImage:{
        type:String
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    features: {
        camera: {
            type: String
        },
        memory: {
            type: String
        },
        processor: {
            type: String
        },
        rating: {
            type: Number
        },
        storage: {
            type: String
        },
        os: {
            type: String
        }
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", product_schema);

module.exports = Product;
