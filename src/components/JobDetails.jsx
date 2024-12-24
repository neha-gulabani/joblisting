import React from 'react';

const JobDetails = ({ job }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Employment Type:</strong> {job.employmentType}</p>
            <p><strong>Posted Date:</strong> {job.postedDate}</p>
            <p><strong>Source:</strong> {job.source}</p>
            <p><strong>Experience Range:</strong> {job.experienceRange}</p>
        </div>
    );
};

export default JobDetails;