import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product",
        default: [],
        required: true,
    }],
}, { timestamps: true }); // createAt, updatedAt

const Order = mongoose.model("Order", OrderSchema);

export default Order;