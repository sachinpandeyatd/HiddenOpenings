import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import PaginationControls from './PaginationControls';

const JobList = ({ searchQuery, currentPage, setCurrentPage }) => {
  const [jobsPage, setJobsPage] = useState({ content: [], totalPages: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const apiUrl = 'http://localhost:8080/api/v1/jobs';
        const params = { 
          search: searchQuery,
          page: currentPage,
          size: 10
        };
        
        const response = await axios.get(apiUrl, { params });
        setJobsPage(response.data);
      } catch (err) {
        setError('Failed to fetch job openings.');
        setJobsPage({ content: [], totalPages: 0 });
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    const searchTimeout = setTimeout(() => {
      fetchJobs();
    }, 300);

    return () => clearTimeout(searchTimeout);

  }, [searchQuery, currentPage]);

  if (isLoading) {
    return <p className="text-center text-gray-500">Searching...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }
  
  if (jobsPage.content.length === 0) {
      return <p className="text-center text-gray-500">No openings found.</p>;
  }

  return (
    <div>
      <div className="space-y-4">
        {jobsPage.content.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <PaginationControls 
        currentPage={currentPage}
        totalPages={jobsPage.totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default JobList;