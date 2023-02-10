import axios from 'axios';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/ReduxHooks';
import { createCard } from '../store/cardSlise';
import { setActive } from '../store/moduleSlise';
import { ICard } from '../types/cards';
import Mybutton from "./MyButton";
import MyInput from "./MyInput";
import MyModal from './MyModal';



const CardForm:React.FC = () => {
    const [card, setCard] = useState<ICard>({cryptoName:'', currency: 'USD', value:0, isLiked:'unliked', id:0})
    const dispatch = useDispatch()
    const cards = useAppSelector(state=> state.cards.cards)
    let alreadyHas:boolean = false


    async function addNewCard(event:React.FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        
       
        const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${card.cryptoName}&tsyms=USD&api_key=6abd532896ac1af9f2c9c39254573ffbec831faeea6e97654d35b7cd0fe75493`)

        cards.forEach((item)=>{
            if (item.cryptoName===card.cryptoName) return alreadyHas = true
        })

        if (response.data.Response=='Error'|| alreadyHas ){
            dispatch(setActive(true))
            setCard({cryptoName:'', currency: 'USD', value:0, isLiked:'unliked', id:0})
        }else{
            dispatch(createCard({ ...card, id: Date.now()}))
            setCard({cryptoName:'', currency: 'USD', value:0, isLiked:'unliked', id:0})
        }


    }

    return (
        <form className='addForm'>
            <MyInput
                value={card.cryptoName}
                onChange={e=>setCard({...card, cryptoName:e.target.value.toUpperCase()})}
                type="text" 
                placeholder="Введите валюту, например ETH, BTC, DOGE, WAVES" 
            /> 
            <Mybutton 
            onClick={addNewCard}
            >Добавить валюту
            </Mybutton>
            <MyModal> 
                {alreadyHas
                ?
                <p>Криптовалюта с названием {card.cryptoName} уже показанна</p>
                :
                <p>У нас нет информации по криптовалюте с названием {card.cryptoName}</p>}
            </MyModal>
        </form>
    );
}

export default CardForm;
