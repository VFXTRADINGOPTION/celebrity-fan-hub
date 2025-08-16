import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user ? (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Welcome, {user.username}!</h2>
                    <p className="mt-2"><strong>Email:</strong> {user.email}</p>
                    <p className="mt-2"><strong>Favorite Celebrity:</strong> {user.favoriteCelebrity}</p>
                    <p className="mt-2"><strong>Membership Status:</strong> {user.membershipStatus}</p>
                </div>
            ) : (
                <p className="text-red-500">Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;