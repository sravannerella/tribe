import React from 'react';
import "./style.scss";
import TagText from '../TagText';

const ItemTab = (props) => {
    const {title, data, money} = props;
    return (
        <>
            <div className="item-tab">
                <p className="text-uppercase text-primary candidate-heading">
                    {title}
                </p>
                <div className="candidate-body">
                    { (data && typeof(data) === "Number") && <h2>{data}</h2> }
                    { (data && typeof(data) !== "Number") && <h4>{data} </h4> }
                    { 
                        money && 
                            <h4>${money}</h4>
                    }
                </div>
            </div>
        </>
    )
}


const CandidateBox = (props) => {
    const {onClick} = props;

    return (
        <>
            <div className="candidate shadow-sm p-4" onClick={onClick}>
                <p className="candidate-title">Sr. Mulesoft Developer</p>

                <div className="d-flex justify-content-between">
                    <p className="text-muted location">Detroit, MI</p>
                    <TagText text="Available" />
                </div>

                <div className="d-flex justify-content-around flex-wrap">
                    <ItemTab title="IT Experience" data={15} />
                    <ItemTab title="Certificates" data={4} />
                    <ItemTab title="Mule Experience" data={3} />
                    <ItemTab title="Mule Versions" data="3.x, 4.x" />
                    <ItemTab title="hourly Rate" money={170} />
                </div>

                <div id="helper" className="w-100">
                    <small className="d-block text-primary text-center">
                        Click to see more information
                    </small>
                </div>

            </div>
        </>
    )
}

export default CandidateBox;