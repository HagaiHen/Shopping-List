import { useState } from 'react';

// Custom hook for crete order
const useCreateOrder = () => {
    const [loading, setLoading] = useState(false);

    // Function to create order
    const createOrder = async (orderData) => {
        try {
            setLoading(true);
            // Send POST request to create order
            const response = await fetch(`/api/orders/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set content type to JSON
                },
                body: JSON.stringify(orderData), // Send the data as JSON payload
            });
            const data = await response.json(); // Parse JSON response from the server
            if (data.error) {
                console.log("Error creating order:", data.error);
                throw new Error(data.error);
            }

        } catch (error) {
            console.error("Error creating order:", error.message);
            alert(error.message);

        } finally {
            setLoading(false);
        };
    }
    return { createOrder, loading };

}

export default useCreateOrder;