import { useEffect, useState } from 'react';

const useGetAllCategories = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Function to fetch categories from the server
        const getCategories = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/categories/get`);
                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                if (data) setCategories(data);

            } catch (error) {
                console.log("Error getting categories:", error.message);
                alert(error.message);

            } finally {
                setLoading(false);
            };

        }
        getCategories();
    }, []); // runs once
    return { categories, loading };
}

export default useGetAllCategories;