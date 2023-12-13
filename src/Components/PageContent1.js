import React, { } from 'react';
import A1 from '../Videos/A1.mp4';

export default function PageContentA1() {


    return (
        <div className="PageContentA1">
            <div className="A1Text">
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
            </div>
            <video
                className="A1Video" autoPlay loop muted> <source src={A1} type="video/mp4" alt="Credit: TSGLY HA, Pexels" />
            </video>
        </div>
    );
}