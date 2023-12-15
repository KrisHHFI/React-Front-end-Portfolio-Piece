import React, { } from 'react';
import HeroVideo from '../Videos/HeroVideo.mp4';

export default function Section1() {

    return (
        <div className="PageContentA1">
            <div className="A1Text">
                Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.
            </div>
            <video
                className="A1Video" autoPlay loop muted> <source src={HeroVideo} type="video/mp4" alt="Credit: TSGLY HA, Pexels" />
            </video>
        </div>
    );
}