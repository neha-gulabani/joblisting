import React, { useState } from 'react';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails';
import SearchBar from '../components/SearchBar';

const hardCodedJobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        location: 'Noida',
        description: 'Develop and maintain user-facing features.',
        employmentType: 'Full-time',
        postedDate: '2024-12-20',
        source: 'LinkedIn',
        experienceRange: '2-4 years',
    },
    {
        id: 2,
        title: 'Backend Developer',
        location: 'Bangalore',
        description: 'Build and manage server-side logic.',
        employmentType: 'Full-time',
        postedDate: '2024-12-18',
        source: 'Indeed',
        experienceRange: '3-5 years',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        location: 'Mumbai',
        description: 'Design intuitive user interfaces.',
        employmentType: 'Part-time',
        postedDate: '2024-12-15',
        source: 'Company Website',
        experienceRange: '1-3 years',
    },
];

const Home = () => {
    const [jobs, setJobs] = useState(hardCodedJobs);
    const [filteredJobs, setFilteredJobs] = useState(hardCodedJobs);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            setFilteredJobs(jobs.filter(job => job.location.toLowerCase().includes(query.toLowerCase())));
        } else {
            setFilteredJobs(jobs);
        }
    };

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 bg-gray-100">
                <SearchBar value={searchQuery} onSearch={handleSearch} />
                <JobList jobs={filteredJobs} onJobClick={handleJobClick} />
            </div>
            <div className="md:w-2/3 p-4">
                {selectedJob ? <JobDetails job={selectedJob} /> : <p>Select a job to view details.</p>}
            </div>
        </div>
    );
};

export default Home;