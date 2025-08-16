import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CelebrityPage = () => {
    const { id } = useParams();
    const [celebrity, setCelebrity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCelebrityDetails = async () => {
            try {
                const response = await fetch(`/api/celebrities/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch celebrity details');
                }
                const data = await response.json();
                setCelebrity(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCelebrityDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            {celebrity && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-bold mb-4">{celebrity.name}</h1>
                    <img src={celebrity.images[0]} alt={celebrity.name} className="mb-4 rounded" />
                    <p className="mb-4">{celebrity.biography}</p>
                    <h2 className="text-xl font-semibold mb-2">Gallery</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {celebrity.images.map((image, index) => (
                            <img key={index} src={image} alt={`Gallery ${index}`} className="rounded" />
                        ))}
                    </div>
                    <h2 className="text-xl font-semibold mt-6 mb-2">Comments</h2>
                    {/* Comments section can be implemented here */}
                </div>
            )}
        </div>
    );
};

export default CelebrityPage;