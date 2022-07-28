import React from 'react';
import './Promos.css';
import Card from './Card';
import promoData from '../card.json';

function Promos() {
    const promos = promoData.promos
    
    return (
        <div className='promos'>
            <div className='promo__cards'>
                {promos.map(promo => 
                <Card 
                    img={promo.img}
                    title={promo.title}
                    description={promo.description}
                    price={promo.price}
                />)}
            </div>
        </div>
    );
}

export default Promos;