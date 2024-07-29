import express from 'express';
import { getAllCategories, createCategory } from '../controllers/categories.js';

const router = express.Router();

router.get('/get', getAllCategories);
router.post('/create', createCategory);
export default router;