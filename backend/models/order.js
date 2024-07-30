import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product",
        default: [],
        required: true,
    }],
}, { timestamps: true }); // createAt, updatedAt

const Order = mongoose.model("Order", OrderSchema);

export default Order;