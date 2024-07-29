import Category from '../models/category.js';

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({})

        if (!categories) return res.status(200).json([]);
        res.status(200).json(categories);

    } catch (error) {
        console.log("error getting categories: ", error.message);
        res.status(500).send({ error: "Internal server error" });
    }
};

// Create a new category
export const createCategory = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).send({ error: 'title required' });
        }

        const newCategory = new Category({
            title: title,
        })

        if (!newCategory) {
            return res.status(400).send({ error: 'cannot create new Category' });
        }

        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        console.log("error create Category: ", error.message);
        res.status(400).json({ error: "Internal server error" });
    }
};