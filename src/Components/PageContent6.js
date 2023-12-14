import React, { } from 'react';
import About from '../Images/About.png';

export default function PageContent6() {


    return (
        <div class="PageContent6">
            <div class="SectionTitle">
                Contact
            </div>
            <div class="PageContent6Container">
                <form  class="PageContent6Form">
                    <input
                        type="text"
                        placeholder="First Name*"
                    />
                    <input
                        type="text"
                        placeholder="Last Name*"
                    />
                    <input
                        type="text"
                        placeholder="Company Name*"
                    />
                    <input
                        type="text"
                        placeholder="Title*"
                    />
                    <input
                        type="text"
                        placeholder="Email*"
                    />
                    <textarea type="text"
                        placeholder="Message*"
                    />
                    <div>
                        <input
                            type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I agree to the terms and conditions.</label>
                    </div>
                    <div class="FormButton">
                        Excepteur
                    </div>
                </form>
            </div>
        </div>
    );
}