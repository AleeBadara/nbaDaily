import React from 'react';
import { NavLink } from 'react-router-dom';
import {getTextLanguage} from './Utils/Language';


const RetourBtn = (props) => {
    return (
        <div className="container retour">
        <NavLink exact to={`${props.chemin}`}><button type="button" className="btn btn-info">{getTextLanguage().goBack}</button></NavLink>
        </div>
    )
}

export default RetourBtn;