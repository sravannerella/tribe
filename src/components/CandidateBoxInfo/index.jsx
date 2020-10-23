import React from 'react';
import "./style.scss";

const CandidateBoxInfo = (props) => {
    const { candidate } = props;
    const {title, location, pay, payTerm, details, name} = candidate;
    return (
        <>
            <div className="candidateInfo">
                <p className="candidate-title">{title}</p>
                <p className="text-muted">{location}</p>

                <div className="d-flex justify-content-between flex-wrap">
                    {/* { Object.keys(experience).map(item => {
                        return (
                            <div className="flex-column">
                                <h4 className="text-uppercase text-primary font-weight-bold small">{item}</h4>
                                <h4 className="text-center">{experience[item]}</h4>
                            </div>
                        );
                    }) } */}
                </div>
                
            </div>
        </>
    )
}

export default CandidateBoxInfo;