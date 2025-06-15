import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2x1 font-bold text-gray-800">HiddenOpenings</h1>
                <div>
                    <button className="text-gray-600 hover:text-blue-600 mr-4">Log In</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;