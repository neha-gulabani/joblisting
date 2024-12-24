import React from 'react';

const JobList = ({ jobs, onJobClick }) => {
    return (
        <ul className="space-y-4">
            {jobs.map((job) => (
                <li
                    key={job.id}
                    className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200"
                    onClick={() => onJobClick(job)}
                >
                    <h3 className="font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.location}</p>
                </li>
            ))}
        </ul>
    );
};

export default JobList;