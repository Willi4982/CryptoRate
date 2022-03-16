import React from 'react';
import СurrencyСard from './СurrencyСard';
import "../styles/CardList.css";
const Cardlist = ({cards, isLiked, getValue, filter, remove}) => {
    return (
        <div className='Cardlist'>
            {cards.map(card =>
                <СurrencyСard 
                    remove={remove} 
                    isLiked={isLiked} 
                    filter={filter}
                    card={card} 
                    key={card.id}
                    getValue={getValue}
                /> 
            )}
        </div>
    );
};

export default Cardlist;
