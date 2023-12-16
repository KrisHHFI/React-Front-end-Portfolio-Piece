import React, { } from 'react';
import HeroVideo from '../Videos/HeroVideo.mp4';

export default function Section1() {

    return (
        <div className="Section1">
            <div className="Section1Text">
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
            </div>
            <video
                className="Section1Video" autoPlay loop muted> <source src={HeroVideo} type="video/mp4" alt="Credit: TSGLY HA, Pexels" />
            </video>
        </div>
    );
}