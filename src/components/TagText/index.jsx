import React from 'react';
import "./style.scss";

const TagText = (props) => {
    const {text} = props;
    return (
        <>
            <div className="tag bg-primary">
                <p className="text-uppercase">{text}</p>
            </div>  
        </>
    )
}

export default TagText;