import React, { } from 'react';
import About from '../Images/About.png';

export default function PageContent6() {

    return (
        <div class="PageContent6">
            <div class="SectionTitle">
                Contact
            </div>
            <div className="PageContent6FormContainer">
                <form class="PageContent6Form">
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
                    <textarea style={{ resize: 'none' }} type="text"
                        placeholder="Message*"
                    />
                    <div className="PageContent6FormCheckBoxContainer">
                        <input type="checkbox" id="TermsAndConditions" name="TermsAndConditions" />
                        <label for="TermsAndConditions"> I agree to the terms and conditions.</label>
                    </div>
                    <div class="FormButton">
                        Excepteur
                    </div>
                </form>
            </div>
        </div>
    );
}