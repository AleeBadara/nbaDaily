import React from 'react';
import RetourBtn from './RetourBtn';
import {getAboutText} from './Utils/Language';

const About = () => {
    return (
        <div className="container about">
            {getAboutText()}
            <RetourBtn chemin="/"/>
        </div>
    )

}

export default About;