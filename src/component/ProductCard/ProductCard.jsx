import React, { useState } from 'react';
import './ProdcutCard.css'

const ProductCard = ({ product, btnAddToCart }) => {
    const { _id, name, description, picture, time, age } = product;
    const msxLength = 100;
    const [expanded, setExpanded] = useState(false);
    const toggleDescription = () => {
        setExpanded(!expanded)
    }
    const rendaringDescription = () => {
        if (description.length <= msxLength || expanded) {
            return <p>About: {description}</p>
        }
        else {
            const shortDescription = `${description.slice(0, msxLength)}`;
            return (
                <div>
                    <p>About : {shortDescription} <span className='read-more' onClick={toggleDescription}>read more</span></p>
                </div>
            )
        }
    }

    return (
        <div className='card'>
            <img className='product-img' src={picture} alt="" />
            <div className="product-info">
                <p className='procuct-name'>{name}</p>
                <p>Require Time : {time} min</p>
                <p>Age : {age}</p>
                {rendaringDescription()}
            </div>
                <button onClick={()=>btnAddToCart(product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default ProductCard;