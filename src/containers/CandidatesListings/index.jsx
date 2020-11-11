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

    const [index, setIndex] = React.useState(0);

    const candidates = [{
        title: "Sr. Mulesoft Architect",
        location: "Detroit, MI",
        pay: "$120",
        payTerm: "hr",
        name: "Sravan Nerella",
        isMulesoft: true,
        details: {
            "Experience": {
                "value": 8,
                "type": "yrs"
            },
            "Certifications": 4,
            "Projects": 3,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "4",
            "Availability": {
                value: "2",
                type: "wks"
            }
        }
    }, {
        title: "Jr. Mulesoft Developer",
        location: "Boston, MA",
        pay: "$220",
        payTerm: "hr",
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 2,
                "type": "yrs"
            },
            "Certifications": 4,
            "Projects": 3,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "3.5",
            "Availability": {
                value: "1",
                type: "wks"
            }
        }
    }, {
        title: "Mulesoft Consultant",
        location: "San Fransico, CA",
        pay: "$90",
        payTerm: "hr",
        isMulesoft: true,
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 10,
                "type": "yrs"
            },
            "Certifications": 4,
            "Projects": 13,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            "Rating": "5",
            "Availability": {
                value: "1",
                type: "mth"
            }
        }
    }, {
        title: "Entry Level Mule Developer",
        location: "Detroit, MI",
        pay: "$50",
        payTerm: "hr",
        name: "Sravan Nerella",
        details: {
            "Experience": {
                "value": 0,
                "type": "yrs"
            },
            "Certifications": 2,
            "Projects": 1,
            "Mule Version": {
                "value": "3, 4",
                "type": ".x"
            },
            // "Rating": "?",
            "Availability": "now"
        }
    }]

    const [count,] = React.useState(candidates.length);
    const [toggle, setToggle] = React.useState(false);

    const handleClick = (index) => {
        setIndex(index);
        setToggle(!toggle);
    }

    return (
        <>
            <h4 className="mt-4">Candidates</h4>
            <p>We found {count} positions matching your query</p>

            <Modal show={toggle} size="lg" animation={true} centered onHide={setToggle}>
                <Modal.Body>
                    <CandidateBoxInfo candidate={candidates[index]} />
                </Modal.Body>
            </Modal>
            
            <div className="candidates">
                { 
                    candidates.map((item, index) => {
                        return (
                            <CandidateDesigner 
                                candidate={item} 
                                key={index}
                                onClick={ handleClick.bind(this, index) }
                            />
                        );
                    }) 
                }
            </div>


        </>
    )
}

export default withRouter(CandidatesListings);