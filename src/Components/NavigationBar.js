import React, { } from 'react';
import '../App.css';
import CompanyALogo from '../Images/CompanyALogo.png';

export default function NavigationBar() {

    return (
        <div class="NavBar" id="NavBar">
            <div class="NavBarLogo"> 
                <a href="#NavBar"><img src={CompanyALogo} /></a>
            </div>
            <div class="NavBarLinks">
                <a href="#Section3">Products</a>
                <a href="#Section4">Our Story</a>
                <a href="#Section5">About</a>
                <a href="#Section6">Contact</a>
            </div>
        </div >
    );
}