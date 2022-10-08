import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://photos5.appleinsider.com/gallery/product_pages/189-hero.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://media.gq.com/photos/560beb2d445a175859b88454/16:9/w_2560%2Cc_limit/Zuckerburg_No%2520Text.jpg'
        }
    ]);


    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className='tinderCards__cardContainer'>
                {people.map(person => (
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                        <div style={{backgroundImage: `url(${person.url})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards