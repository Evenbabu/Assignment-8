import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProfileData from '../ProfileData/ProfileData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './GridData.css';


const GridData = () => {
    const [proContainer, setProContainer] = useState([]);
    const [cards, setCard] = useState([])
   
    useEffect(() => {
        fetch('gymApi.json')
            .then(res => res.json())
            .then(data => setProContainer(data))
    }, [])

    const btnAddToCart = (card) => {
        setCard(prevCard => [...prevCard, card]);
    }

    return (
        <div className='grid-data'>
            <div className='container'>
                <div className='logo-title'>
                    <FontAwesomeIcon className='logo' icon={faDumbbell} />
                    <h3>World Gym Club</h3>
                </div>
                <h5>Select today’s exercise</h5>
                <div className='cards'>
                    {
                        proContainer.map(p => <ProductCard
                            product={p}
                            key={p._id}
                            btnAddToCart={btnAddToCart}
                        ></ProductCard>)
                    }
                </div>
            </div>
            <div>
                <ProfileData cards={cards}></ProfileData>
            </div>
        </div>
    );
};

export default GridData;