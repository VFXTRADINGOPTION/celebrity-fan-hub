import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to Celebrity Fan Hub</h1>
            <p className="text-lg text-center mb-8">Your ultimate destination for all things celebrity!</p>
            <div className="flex flex-wrap justify-center">
                <a href="/celebrities" className="m-2 p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
                    Explore Celebrities
                </a>
                <a href="/login" className="m-2 p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
                    Login
                </a>
                <a href="/register" className="m-2 p-4 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition">
                    Register
                </a>
            </div>
        </div>
    );
};

export default Home;