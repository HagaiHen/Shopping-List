import Order from '../models/order.js';
import Product from '../models/product.js';

export const createOrder = async (req, res) => {
    try {
        const { fullname, email, address, products } = req.body;

        if (!fullname || !email || !address || !products) {
            return res.status(400).send({ error: 'All fields are required' });
        }

        // Create new products and get their IDs
        const productDocs = products.map(product => new Product(product));
        const savedProducts = await Promise.all(productDocs.map(product => product.save()));
        const productIds = savedProducts.map(product => product._id);

        const newOrder = new Order({
            fullname,
            email,
            address,
            products: productIds,
        });

        if (!newOrder) {
            return res.status(400).send({ error: 'cannot create new Category' });
        }

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.log("error creating new order: ", error.message);
        res.status(400).json({ error: "Internal server error" });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('products');

        if (!orders) return res.status(200).json([]);
        res.status(200).json(orders);

    } catch (error) {
        console.log("error getting orders: ", error.message);
        res.status(500).send({ error: "Internal server error" });
    }
};