import React from 'react';
import { JobCard } from '../../components/JobCard';

const JobListings = (props) => {

    const [count, setCount] = React.useState(10);
    
    return (
        <>
            <h4 className="mt-4">Job Listings</h4>
            <p>We found {count} positions matching your query</p>

            { Array(count).fill(1).map(item => <JobCard />) }
        </>
    )
}

export default JobListings;