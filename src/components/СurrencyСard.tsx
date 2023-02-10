import LikeButton from './LikeButton';
import Mybutton from './MyButton';
import "../styles/СurrencyСard.css";
import { useDispatch } from 'react-redux';
import { getValue, likeCard, removeCard } from '../store/cardSlise';
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/ReduxHooks';
import { ICard } from '../types/cards';

interface СurrencyСardProps{
    card:ICard
}

const СurrencyСard:React.FC<СurrencyСardProps> = function({card}){
    const filter = useAppSelector(state=> state.cards.filter)
    const dispatch = useDispatch()

    useEffect(() => {
            fetch(
              `https://min-api.cryptocompare.com/data/price?fsym=${card.cryptoName}&tsyms=USD&api_key=6abd532896ac1af9f2c9c39254573ffbec831faeea6e97654d35b7cd0fe75493`
            )
            .then(res=> res.json())
            .then(
              (result) =>{
                dispatch(getValue([card, result.USD]))
              }
            )
    },[]);


    localStorage.setItem('isFilter',JSON.stringify(filter))
    return (
        <div className={"card "+card.isLiked+' '+filter.isFilter}>
            <p className="currency"> 
                {card.cryptoName} - {card.currency}
            </p>
            <p className="value"> 
                {card.value}
            </p>        
            <Mybutton onClick={() => dispatch(removeCard(card))}>
                Удалить
            </Mybutton>
            <LikeButton  onClick={() => dispatch(likeCard(card))}/>
        </div>
    );
}
export default СurrencyСard;