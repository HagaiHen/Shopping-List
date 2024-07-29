import express from 'express';
import { createOrder, getAllOrders } from '../controllers/orders.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/get', getAllOrders);

export default router;