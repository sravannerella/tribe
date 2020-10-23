import React from 'react';
import './style.scss';

export const CandidateInfo = (props) => {
    return (
        <>
            <div className="container">
                <h4>Candidate Information</h4>
                <div className="candidateCard shadow-sm p-3">

                    <div className="d-flex">
                        <div className="px-5 text-center border-right">
                            <div className="userImg">
                                <img 
                                    src="https://place-hold.it/100x100/dedede" 
                                    alt="placeholder" 
                                    className="rounded-circle"/>
                            </div>
                            <p className="heading">Sravan Nerella</p>
                            <p className="subtitle">Sr. Software Engineer</p>
                        </div>
                        
                        <div className="details">
                            <p className="info">User Information</p>
                            <div className="d-flex flex-wrap">
                                <div className="w-25">
                                    <p className="title">Email:</p>
                                    <p className="email">snerella@open-logix.com</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Phone Number:</p>
                                    <p className="email">313-244-9734</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Location:</p>
                                    <p className="email">Bloomfield Hills, MI</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Gender:</p>
                                    <p className="email">Male</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Experience:</p>
                                    <p className="email">3+</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Availability:</p>
                                    <p className="email">40 hrs/ week</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Rate:</p>
                                    <p className="email">$80/hr</p>
                                </div>

                                <div className="w-25">
                                    <p className="title">Personal Site:</p>
                                    <p className="email">https://sravannerella.github.io</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}