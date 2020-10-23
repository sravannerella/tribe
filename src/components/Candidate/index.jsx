import React from 'react';
import './style.scss';
import {File, Link, Mail} from 'react-bytesize-icons';

const Candidate = (props) => {
    const {onClick} = props;

    return (
        <>
            <div className="shadow-sm candidate my-2" onClick={onClick}>

                <div className="userImg">
                    <img 
                        src="https://place-hold.it/100x100/dedede" 
                        alt="placeholder" 
                        className="rounded-circle"/>
                </div>

                <div className="text-center p-1">
                    <strong className="title">Sravan Nerella</strong>
                    <p className="subtitle">Sr. Software Engineer</p>
                </div>

                <div className="details">
                    <div className="d-flex justify-content-between">
                        <p className="text-left w-50">Experience</p>
                        <p>3+ years</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="text-left w-50">Availability</p>
                        <p>40 hrs/week</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="text-left w-50">Hourly Rate</p>
                        <p>$60</p>
                    </div>
                </div>

                <hr/>

                <div className="icons">
                    <File color="royalblue" width={20} height={20} />
                    <Mail color="#212121" width={20} height={20} />
                    <Link color="royalblue" width={20} height={20} />
                </div>

            </div>
        </>
    )
}

export default Candidate;