import React, { useEffect, useState } from 'react';
import { Section, Container } from '../components/shared';
import axios from 'axios';

const JobPostings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold mb-4">Job Postings</h1>
        <ul>
          {jobs.map((job) => (
            <li key={job._id} className="mb-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>{job.description}</p>
              <p>{job.location}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default JobPostings; 