import React, { } from 'react';
import ProductImage from '../../Images/Product.png';

export default function Product() {
    return (
        <div class="Product">
            <div class="ProductImageContainer">
                <img class="ProductImage" src={ProductImage} />
            </div>
            <div class="ProductTextContainer">
                <div class="ProductText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <div class="ProductTextButton">
                    <a href="">Excepteur</a>
                </div>
            </div>
        </div>
    );
}