import React from 'react';
import SolidButton from '../assets/SolidButton';
import { Link } from 'react-router-dom';

const HeroSection = (props) => {
    return (
        <div className='hero-section' style={props.reverse ? {flexDirection: 'row-reverse'} : null}>
            <div>
                <div className='hero-heading'>{props.heading}</div>
                <div className='hero-body'>{props.body}</div>
            </div>
            <div className='hero-image'>{props.image}</div>
        </div>
    );
}

export default HeroSection;