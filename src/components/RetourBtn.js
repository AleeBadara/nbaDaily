import React from 'react';
import { NavLink } from 'react-router-dom';


const RetourBtn = () => {
    return (
        <div className="container retour">
        <NavLink exact to="/"><button type="button" className="btn btn-info">Retour</button></NavLink>
        </div>
    )
}

export default RetourBtn;