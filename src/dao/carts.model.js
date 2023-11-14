const mongoose = require('mongoose');

const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({
    products: { type: Array, required: true },
    // products: [{
    //     product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    //     quantity: { type: Number, required: true, min: 1 }
    // }]
});

const cartModel = mongoose.model(cartCollection, cartSchema);

module.exports = cartModel;
