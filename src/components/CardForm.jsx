import React, {useState} from 'react';
import Mybutton from "./UI/button/MyButton";
import MyInput from "./UI/imput/MyInput";
const CardForm = ({create}) => {
    const [card, setCard] = useState({cryptoName:'', currency: 'USD', value:'-', isLiked:'unliked'})


    function addNewCard(e) {
        e.preventDefault();

               fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${card.cryptoName}&tsyms=USD&api_key=6abd532896ac1af9f2c9c39254573ffbec831faeea6e97654d35b7cd0fe75493`
                )
                .then(res=> res.json())
                .then(
                    (result) =>{
                        const newCard={
                            ...card, value:result.USD, id: Date.now()
                        }
                        create(newCard)
                    }
                )


        setCard({cryptoName:'', currency: 'USD', value:'-', isLiked:'unliked'})
    }

    return (
        <form className='addForm'>
            <MyInput
                value={card.cryptoName}
                onChange={e=>setCard({...card, cryptoName:e.target.value })}
                type="text" 
                placeholder="Введите валюту, например ETH, BTC, DOGE, WAVES" 
            />
            <Mybutton onClick={addNewCard}>Добавить валюту</Mybutton>
        </form>
    );
}

export default CardForm;
