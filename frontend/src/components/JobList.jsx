import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import axios from 'axios';

const JobList = () => {
    const BACKEND_JOB_API = import.meta.env.VITE_BACKEND_JOB_API;

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchJobs = async () =>{
            try{
                const response = await axios.get(BACKEND_JOB_API);
                setJobs(response.data);
            }catch(error){
                setError('Failed to fetch job openings.');
                console.error(error);
            }finally{
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if(isLoading){
        return <p className="text-center text-red-500">Loading openings...</p>;
    }

    if(error){
        return <p className="text-center text-red-500">{error}</p>
    }

    return (
        <div className="space-y-4">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobList;