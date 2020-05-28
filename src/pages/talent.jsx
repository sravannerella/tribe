import React from 'react';
import SearchBox from '../components/Search';
import CandidatesListings from '../containers/CandidatesListings';

const TalentPage = (props) => {
    return (
        <>
            <div className="container">
                <SearchBox 
                    size="lg"
                    label="Search Talent"
                    placeholder="Search person by skill, name, job title, experience"
                    filters={true}
                />
            </div>

            <div className="container">
                <CandidatesListings />
            </div>

        </>
    )
}

export default TalentPage;
