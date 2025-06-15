import React from 'react';
import JobCard from './JobCard';

// Mock data
const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Innovate Inc.',
    location: 'Remote',
    type: 'Full-time',
    postedDate: '2 days ago',
    applyLink: '#',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'DataSolutions',
    location: 'New York, NY',
    type: 'Full-time',
    postedDate: '5 days ago',
    applyLink: '#',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Creative Minds',
    location: 'Austin, TX (Hybrid)',
    type: 'Contract',
    postedDate: '1 week ago',
    applyLink: '#',
  },
];

const JobList = () => {
    return (
        <div className="space-y-4">
            {mockJobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobList;