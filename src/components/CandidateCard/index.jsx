import React from 'react';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faBriefcase, faIdCardAlt, faPassport, faHorseHead, faDollarSign, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ItemTab = (props) => {
    const {title, data, icon} = props;
    return (
        <>
            <div className="item-tab my-3">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={icon} className="mr-1 text-muted" />
                    <p className="text-uppercase text-muted mb-0 candidate-heading">
                        {title}
                    </p>
                </div>

                <div className="candidate-body">
                    { data && <h4 className="font-weight-bold font-40 w-100">{data}</h4> }
                </div>
            </div>
        </>
    )
}


export default function () {
    return (
        <div className="candidate-card">

            <div className="header d-flex align-items-center justify-content-between">
                <div>
                    <p className="title">Sr. Mulesoft Developer</p>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faLocationArrow} className="mt-1 mr-2 font-10" />
                        <p className="location">Detroit, MI</p>
                    </div>
                </div>
                <div>
                    <div className="icon">
                        SL
                    </div>
                </div>
            </div>


            <div className="body">
                <div className="d-flex justify-content-between">
                    <ItemTab title="IT Experience" data="10" icon={faBriefcase} />
                    <ItemTab title="Mule Experience" data="10" icon={faHorseHead} />
                </div>
                
                {/* <ItemTab title="Certificates" data="2" icon={faPassport} /> */}

                <div className="d-flex justify-content-between">
                    <ItemTab title="Mule versions" data="3.x, 4.x" icon={faIdCardAlt} />
                    <ItemTab title="Hourly Rate" data="100" icon={faDollarSign} />
                </div>
            </div>


            <div className="footer">
                <p className="title">More Details</p>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </div>
        </div>
    )
}