import React from "react";

const PaginationControls = ({currentPage, totalPages, onPageChange}) => {
    if(totalPages <= 1) return null;

    return (
        <div className="flex justify-center item-center space-x-4, mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 
                    hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            
            <span className="text-sm text-gray-600">
                Page {currentPage + 1} of {totalPages}
            </span>
            <button onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 
                    hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
};

export default PaginationControls;