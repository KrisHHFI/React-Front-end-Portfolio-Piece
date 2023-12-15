import React, { } from 'react';
import Image1 from '../Images/Image1.png';

export default function Section2() {

    return (
        <div class="PageContentA2">
            <div class="A2TextContainer">
                <div class="A2TextTitle">
                    Incididunt Ut Labore Et Dolore
                </div>
                <div class="A2Text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.  <br /><br /> Velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div class="A2ImageContainer">
                <img class="A2Image" src={Image1} />
            </div>
        </div>
    );
}