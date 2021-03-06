import React from 'react';
import "./style.scss";
import * as MulesoftLogo from "../../assets/MuleSoftLogo.png";
import * as SalesforceLogo from "../../assets/SalesforceLogo.png";

const Tag = (props) => {
    const {name, context} = props;

    return (
        <>
            <div className="tag">
                <p className="text">{name}</p>
                <span className="context">{context}</span>
            </div>
        </>
    )
}

export default function(props) {

    const {candidate, onClick} = props;
    const {title, location, pay, payTerm, details, name, isMulesoft} = candidate;
    const detailKeys = Object.keys(details);
    const initials = name.split(" ").map(item => item[0]).join("");

    return (
        <div onClick={onClick} className="candidate">
            <div className="d-flex">
                <div className="avatar">
                    {/* <p>{initials}</p> */}
                    <img src={isMulesoft ? MulesoftLogo : SalesforceLogo} alt="mulesoft"/>
                </div>

                <div className="name">
                    <p className="title">{title}</p>
                    <div className="d-flex">
                        <Tag name={pay} context={"/"+ payTerm} />
                        <div className="divider"></div>
                        <div className="d-flex">
                            <span className="location"></span>
                            <p className="locationName">{location}</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="details">

                {detailKeys.map((item, key) => {
                    return (
                    <div key={key} className="detail">
                        {
                            typeof(details[item]) === "object" && <div className="content">
                                <div className="value">{details[item].value}</div>
                                <span className="context">{details[item].type}</span>
                            </div> 
                        }
                        {
                            typeof(details[item]) !== "object" && 
                                <div className="value">{details[item]}</div>
                        }
                        <div className="title">{item}</div>
                    </div>
                    )
                })}
                
            </div>

            { onClick && <div className="footer">
                <hr/>
                <div className="subtext">
                    <p>More Details</p>
                    <span className="arrowRight"></span>
                </div>
            </div> }

        </div>
    )
}