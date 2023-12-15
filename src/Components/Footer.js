import React, { } from 'react';
import LinkedInIcon from '../Images/LinkedInIcon.jpg';
import YouTubeIconIcon from '../Images/YouTubeIcon.png';

export default function FooterA() {

    return (
        <div class="Footer">
            <div class="socialIcons">
                <img class="NavBarA-Logo" src={LinkedInIcon} />
                <img class="NavBarA-Logo" src={YouTubeIconIcon} />
            </div>
            Copyright © 2023 Kristopher Pepper. All Rights Reserved.
        </div>
    );
}