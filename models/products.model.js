const { Schema, model, Mongoose } = require('mongoose');

const productSchema = new Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);

module.exports = { Product };
