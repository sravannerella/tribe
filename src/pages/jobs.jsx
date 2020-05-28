import React from 'react';
import SearchBox from '../components/Search';
import JobListings from '../containers/JobListings';

export const Jobs = (props) => {
    return (
        <>
            <div className="container">
                <SearchBox 
                    size="lg"
                    label="Search Job"
                    placeholder="Search jobs by title, role, location, company, salary"
                    filters={true}
                />
            </div>

            <div className="container">
                <JobListings />
            </div>
        </>
    )
}