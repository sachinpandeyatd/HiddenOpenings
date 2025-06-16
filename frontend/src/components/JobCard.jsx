import React from 'react';

const JobCard = ({ job }) => {
  const CompanyIcon = () => (
    <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex items-center space-x-6">
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-800 hover:text-blue-600">
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
            {job.title}
          </a>
        </h3>
        
        <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600">
          <div className="flex items-center space-x-2">
            <CompanyIcon />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon />
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between space-y-4 min-w-[120px]">
        <span className="bg-slate-200 text-slate-800 text-xs font-medium px-3 py-1 rounded-full">
          {job.type}
        </span>
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-semibold whitespace-nowrap"
        >
          View & Apply
        </a>
      </div>
    </div>
  );
};

export default JobCard;