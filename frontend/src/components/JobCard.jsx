import React from "react";

const JobCard = ({ job }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-x1 font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.company}</p>
                </div>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-1 rounded-full">{job.type}</span>
            </div>
            <p className="text-gray-500 mt-2">{job.location}</p>
            <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-400">Posted {job.postedDate}</p>
                <a href="{href.applyLink}" target="_blank" rel="noopener noreferrer" 
                    className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 text-sm font-medium">View & Apply</a>
            </div>
        </div>
    );
};

export default JobCard;