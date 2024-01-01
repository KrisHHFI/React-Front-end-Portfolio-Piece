import React, { useState, useRef } from 'react';

export default function Section6() {
    const formRef = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        formRef.current.reset();
        alert('Thank you for your message. We will get back to you shortly.');
    };

    return (
        <div class="PageContent6" id="Section6">
            <div class="SectionTitle">
                Contact
            </div>
            <form class="PageContent6Form" ref={formRef}>
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
                <button class="BasicButton" onClick={submitForm}>
                    Excepteur
                </button>
            </form>
        </div>
    );
}