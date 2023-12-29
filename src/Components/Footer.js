import React, { } from 'react';
import LinkedInIcon from '../Images/LinkedInIcon.jpg';
import YouTubeIconIcon from '../Images/YouTubeIcon.png';

export default function FooterA() {

    return (
        <div class="Footer">
            <div class="socialIcons">
                <a href="https://www.linkedin.com/in/kristopher-pepper-824184136/"><img class="NavBarA-Logo" src={LinkedInIcon} /></a>
                <a href="https://www.youtube.com/channel/UC_3Et-wk6h3X_BfursY-ITA"><img class="NavBarA-Logo" src={YouTubeIconIcon} /></a>
            </div>
            Copyright © 2023 Kristopher Pepper. All Rights Reserved.
        </div>
    );
}