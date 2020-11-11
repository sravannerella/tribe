import React from 'react';
import "./style.scss";

export default function(props) {
    const {name} = props;

    return (
        <>
            <div className="certificate">
                <div className="d-flex">
                    <span className="cert"></span>
                    <div className="detail">
                        <p className="name">{name}</p>
                        <small>Valid till 2021</small>
                    </div>
                </div>
            </div>
        </>
    )
}