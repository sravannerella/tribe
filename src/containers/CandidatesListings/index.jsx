import React from 'react';
import Candidate from '../../components/Candidate';
import './style.scss';

const CandidatesListings = (props) => {

    const [count, setCount] = React.useState(5);

    return (
        <>
            <h4 className="mt-4">Candidates</h4>
            <p>We found {count} positions matching your query</p>
            
            <div className="candidates">
                { Array(count).fill(1).map((item, index) => <Candidate key={index} />) }
            </div>
        </>
    )
}

export default CandidatesListings;