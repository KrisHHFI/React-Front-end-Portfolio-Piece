import React, { } from 'react';
import CompanyALogo from '../Images/CompanyALogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {

    return (
        <div class="NavBar" id="NavBar">
            <div class="NavBarLogo">
                <a href="#NavBar"><img src={CompanyALogo} /></a>
            </div>
            <div class="NavBarLinks">
                <div class="NavBarLink">
                    <a href="#Section3">Products</a>
                </div>
                <div class="NavBarLink">
                    <a href="#Section4">Our Story</a>
                </div>
                <div class="NavBarLink">
                    <a href="#Section5">About</a>
                </div>
                <div class="NavBarLink">
                    <a href="#Section6">Contact</a>
                </div>
            </div>
            <div class="BurgerNav">
                <div class="BurgerNavIcon">
                    <span>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
                <div class="BurgerNavLinks">
                    <a href="#Section3">Products</a>
                    <a href="#Section4">Our Story</a>
                    <a href="#Section5">About</a>
                    <a href="#Section6">Contact</a>
                </div>
            </div>
        </div >
    );
}