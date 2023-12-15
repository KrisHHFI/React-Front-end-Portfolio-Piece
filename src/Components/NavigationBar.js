import React, { } from 'react';
import '../App.css';
import CompanyALogo from '../Images/CompanyALogo.png';


export default function NavigationBar() {


    return (
        <div class="NavBarA">
            <div class="NavBarA-LogoContainer">
                <img class="NavBarA-Logo" src={CompanyALogo} />
            </div>
            <div class="NavBarA-LinkContainer">
                <div class="NavBarA-Link">
                    Products
                </div>
                <div class="NavBarA-Link">
                    Our Story
                </div>
                <div class="NavBarA-Link">
                    About
                </div>
                <div class="NavBarA-Link">
                    Contact
                </div>
            </div>
        </div >
    );
}