import React from 'react';
import Spinner from 'react-spinkit';

const MySpinner = (props) => {
    let { name, color } = props;
    return (
        <div className="container">
            <span>Chargement...</span>
            <Spinner name={name} color={color} />
        </div>
    )
}

export default MySpinner;