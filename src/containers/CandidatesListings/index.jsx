import React from 'react';
// import Candidate from '../../components/Candidate';
import './style.scss';
import { withRouter } from 'react-router-dom';
// import CandidateBox from '../../components/CandidateBox';
import { Modal } from 'react-bootstrap';
import CandidateBoxInfo from '../../components/CandidateBoxInfo';
import CandidateDesigner from '../../components/CandidateDesigner';
// import CandidateCard from '../../components/CandidateCard';

const CandidatesListings = (props) => {

    const candidates = [{
        title: "Sr. Mulesoft Developer",
        location: "Detroit, MI",
        pay: 120,
        payTerm: "hr",
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 8,
                "type": "yrs"
            },
            "Certificates": 4,
            "Projects": 3,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "4"
        }
    }, {
        title: "Jr. Mulesoft Developer",
        location: "Boston, MA",
        pay: 120,
        payTerm: "hr",
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 2,
                "type": "yrs"
            },
            "Certificates": 4,
            "Projects": 3,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "3.5"
        }
    }, {
        title: "Mulesoft Consultant",
        location: "San Fransico, CA",
        pay: 120,
        payTerm: "hr",
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 10,
                "type": "yrs"
            },
            "Certificates": 4,
            "Projects": 13,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "5"
        }
    }, {
        title: "Entry Level Mule Developer",
        location: "Detroit, MI",
        pay: 120,
        payTerm: "hr",
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 0,
                "type": "yrs"
            },
            "Certificates": 2,
            "Projects": 1,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "?"
        }
    }]

    const [count,] = React.useState(candidates.length);
    const [toggle, setToggle] = React.useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <h4 className="mt-4">Candidates</h4>
            <p>We found {count} positions matching your query</p>

            <Modal show={toggle} size="xl" animation={true} centered onHide={setToggle}>
                <Modal.Body>
                    <CandidateBoxInfo candidate={candidates[0]} />
                </Modal.Body>
            </Modal>
            
            <div className="candidates">
                { 
                    candidates.map((item, index) => {
                        return (
                            <CandidateDesigner 
                                candidate={item} 
                                key={index} 
                                onClick={ handleClick }
                            />
                        );
                    }) 
                }
            </div>
        </>
    )
}

export default withRouter(CandidatesListings);