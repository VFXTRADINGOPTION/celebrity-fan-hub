import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Celebrity = () => {
    const [celebrities, setCelebrities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCelebrities = async () => {
            try {
                const response = await axios.get('/api/celebrities');
                setCelebrities(response.data);
            } catch (error) {
                console.error('Error fetching celebrities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCelebrities();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Celebrity Fan Hub</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {celebrities.map((celebrity) => (
                    <li key={celebrity.id} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold">{celebrity.name}</h2>
                        <p>{celebrity.biography}</p>
                        <img src={celebrity.images[0]} alt={celebrity.name} className="mt-2 rounded" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Celebrity;