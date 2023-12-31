import React, { } from 'react';
import LinkedInIcon from '../Images/LinkedInIcon.jpg';
import LinkedInIconBlue from '../Images/linkedinIconBlue.jpg';
import YouTubeIconIcon from '../Images/YouTubeIcon.png';
import YouTubeIconIconBlue from '../Images/YouTubeIconBlue.png';

export default function FooterA() {

    return (
        <div class="Footer">
            <div class="socialIcons">
                <a href="https://www.linkedin.com/in/kristopher-pepper-824184136/" className="iconLink">
                    <img src={LinkedInIcon} alt="LinkedIn Icon" className="NavBarA-Logo" />
                    <img src={LinkedInIconBlue} alt="LinkedIn Icon Blue" className="hoverIcon" />
                </a>
                <a href="https://www.youtube.com/channel/UC_3Et-wk6h3X_BfursY-ITA" className="iconLink">
                    <img src={YouTubeIconIcon} alt="YouTube Icon" className="NavBarA-Logo" />
                    <img src={YouTubeIconIconBlue} alt="YouTube Icon Blue" className="hoverIcon" />
                </a>
            </div>
            Copyright © 2023 Kristopher Pepper. All Rights Reserved.
        </div>
    );
}