import React, { } from 'react';
import TimelineImage from '../Images/TimelineImage.png';

export default function Section4() {


    return (
        <div class="PageContent4">
            <div class="SectionTitle">
                Our Story
            </div>
            <div class="TimelineItem">
                <div class="TimelineImageContainer ImageRight">
                    <img class="TimelineImage" src={TimelineImage} />
                </div>
                <div class="TimelineTextContainer">
                    <div class="TimelineTitle TextLeft">
                        Lorem Ipsum Dolor Sit Amet
                    </div>
                    <div class="TimelineText TextLeft">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
            </div>
            <div class="TimelineItem">
                <div class="TimelineTextContainer">
                    <div class="TimelineTitle TextRight">
                        Lorem Ipsum Dolor Sit Amet
                    </div>
                    <div class="TimelineText TextRight">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
                <div class="TimelineImageContainer ImageLeft">
                    <img class="TimelineImage" src={TimelineImage} />
                </div>
            </div>
            <div class="TimelineItem">
                <div class="TimelineImageContainer ImageRight">
                    <img class="TimelineImage" src={TimelineImage} />
                </div>
                <div class="TimelineTextContainer">
                    <div class="TimelineTitle TextLeft">
                        Lorem Ipsum Dolor Sit Amet
                    </div>
                    <div class="TimelineText TextLeft">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
            </div>
        </div>
    );
}