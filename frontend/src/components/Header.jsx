import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto max-w-5xl px-4 flex justify-between items-center h-16">
                <h1 className="text-2xl font-bold text-slate-800">HiddenOpenings</h1>
                <div className="flex items-center space-x-4">
                    <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                        Log In
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold transition-colors">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;