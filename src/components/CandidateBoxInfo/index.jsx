import React from 'react';
import CandidateDesigner from '../CandidateDesigner';
import Certificate from '../Certificate';
import "./style.scss";

const CandidateBoxInfo = (props) => {
    const { candidate } = props;
    // const {title, location, pay, payTerm, details, name} = candidate;
    return (
        <>
            <div className="candidateInfo">
                <CandidateDesigner candidate={candidate} showMoreDetails={false} />
            </div>

            <div className="d-flex my-3">
                <div className="certificates w-50">
                    <div className="d-flex mb-2">
                        <span className="verified"></span>
                        <p className="title">Verified Certificates</p>
                    </div>
                    <div className="d-flex flex-column">
                        {new Array(4).fill(10).map(item => {
                            return <Certificate name="MCD - Level 1" />
                        })}
                    </div>
                </div>

                <div className="projects">
                    
                </div>
            </div>

            <div className="footer">
                <button className="btn btn-outline-primary">
                    Save Candidate
                </button>
                {/* <p className="title">Save Candidate</p> */}
            </div>
        </>
    )
}

export default CandidateBoxInfo;