import React from 'react';

const PremiumMembership: React.FC = () => {
    const handleUpgrade = () => {
        // Logic for upgrading to premium membership
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Upgrade to Premium Membership</h1>
            <p className="mb-4">Enjoy exclusive benefits and content by becoming a premium member!</p>
            <ul className="list-disc list-inside mb-4">
                <li>Access to exclusive celebrity content</li>
                <li>Ad-free experience</li>
                <li>Special discounts on merchandise</li>
            </ul>
            <button 
                onClick={handleUpgrade} 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Upgrade Now
            </button>
        </div>
    );
};

export default PremiumMembership;