import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {Search} from 'react-bytesize-icons';

// const Filters = (props) => {
//     const { label } = props;

//     return (
//         <>
//             <p>{label}</p>
//         </>
//     )
// }

const SearchBox = (props) => {
    const { placeholder, label } = props;
    
    return (
        <>
            <div className="searchBox">
                <h4>{label}</h4>
                <div className="d-flex align-items-center shadow-sm p-3 input">
                    <Search width={20} height={20} />
                    <input 
                        type="text"
                        placeholder={placeholder}
                        className="form-control h-100 border-0 shadow-none" 
                        />
                    <Button variant="primary">Search</Button>
                </div>
            </div>
        </>
    )
}

SearchBox.defaultProps = {
    size: 'lg',
    placeholder: '',
    label: ''
}

SearchBox.propTypes = {
    size: PropTypes.oneOf(['md', 'lg']),
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    filters: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object)
}

export default SearchBox;