import React from 'react';

const UserProfile: React.FC = () => {
    // Sample user data, replace with actual data from state or props
    const user = {
        username: 'john_doe',
        email: 'john@example.com',
        favoriteCelebrity: 'Leonardo DiCaprio',
        membershipStatus: 'Premium',
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{user.username}'s Profile</h2>
                <p className="text-gray-700 mb-4">Email: {user.email}</p>
                <p className="text-gray-700 mb-4">Favorite Celebrity: {user.favoriteCelebrity}</p>
                <p className="text-gray-700">Membership Status: {user.membershipStatus}</p>
            </div>
        </div>
    );
};

export default UserProfile;