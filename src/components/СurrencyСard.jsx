import React from 'react'
import LikeButton from './LikeButton';
import Mybutton from './UI/button/MyButton';
import "../styles/СurrencyСard.css";
const СurrencyСard = function(props){
    return (
        <div className={"card "+props.card.isLiked+' '+props.filter}>
            <p className="currency"> 
                {props.card.cryptoName} - {props.card.currency}
            </p>
            <p className="value"> 
                {props.card.value}
            </p>        
            <Mybutton onClick={() => props.remove(props.card)}>
                Удалить
            </Mybutton>
            <LikeButton  onClick={() => props.isLiked(props.card)}/>
        </div>
    );
}
export default СurrencyСard;