import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CelebrityList = () => {
    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        const fetchCelebrities = async () => {
            const response = await fetch('/api/celebrities');
            const data = await response.json();
            setCelebrities(data);
        };

        fetchCelebrities();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Celebrity List</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {celebrities.map((celebrity) => (
                    <li key={celebrity.id} className="border rounded-lg p-4 shadow-md">
                        <Link to={`/celebrity/${celebrity.id}`}>
                            <h2 className="text-xl font-semibold">{celebrity.name}</h2>
                            <p className="text-gray-600">{celebrity.biography.substring(0, 100)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CelebrityList;