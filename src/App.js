import React, {useState, useEffect} from "react";
import "./styles/App.css"
import Cardlist from "./components/CardList";
import Mybutton from "./components/UI/button/MyButton";
import CardForm from "./components/CardForm";
function App() {
    const [cards, setcards] = useState(
        JSON.parse(localStorage.getItem('cards')) ||
    [
        {cryptoName:'ICP', currency: 'USD', value:'-', isLiked:'unliked', id:'1'},
        {cryptoName:'JST', currency: 'USD', value:'-', isLiked:'unliked', id:'2'},
        {cryptoName:'DASH', currency: 'USD', value:'-', isLiked:'unliked', id:'3'},
        {cryptoName:'LUNA', currency: 'USD', value:'-', isLiked:'unliked', id:'4'},
        {cryptoName:'BUSD', currency: 'USD', value:'-', isLiked:'unliked', id:'5'}
    ]) 

    const [isFilter, setisFilter] = useState(
        JSON.parse(localStorage.getItem('isFilter')) || 
        {isFilter:'unfiltered', buttonDescription:'только залайканые'}
    )

    useEffect(() => {
        cards.forEach(function(item) {
            fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${item.cryptoName}&tsyms=USD&api_key=6abd532896ac1af9f2c9c39254573ffbec831faeea6e97654d35b7cd0fe75493`
            )
            .then(res=> res.json())
            .then(
                (result) =>{
                    item.value=result.USD
                    setcards([...cards]);
                }
            )
        });
        
    },[]);
  


    function createCard(newcard){
        setcards([...cards, newcard])
    }

    function removeCard(card){
        setcards(cards.filter(c => c.id !== card.id))
    }
    
    function filterCards(){
        if (isFilter.isFilter=='unfiltered') {
            isFilter.isFilter='filtered'
            isFilter.buttonDescription='все'
        }else{
            isFilter.isFilter='unfiltered'
            isFilter.buttonDescription='только залайканые'
        }
        setisFilter({...isFilter})
    }

    function likeCard(card){
        card.isLiked=='unliked'
        ? 
        card.isLiked='liked'
        : 
        card.isLiked='unliked'   
        setcards([...cards]);       
    }

    function getValue(card,val){
        card.value=val;
        setcards([...cards]);
        console.log(val);
    }
    {localStorage.setItem('cards',JSON.stringify(cards))}
    {localStorage.setItem('isFilter',JSON.stringify(isFilter))}
    return ( 
        <div className = "App" >
            <CardForm create={createCard}/>
            <div className={"filter "+isFilter.isFilter}>
                <Mybutton
                    onClick={() => filterCards()}
                >
                    показать {isFilter.buttonDescription} карточки
                </Mybutton>
            </div>
            <hr style={{margin:'15px 0'}}/>
            {cards.length
                ?
                <Cardlist  
                    remove={removeCard}
                    isLiked={likeCard} 
                    cards={cards} 
                    filter={isFilter.isFilter}
                    getValue={getValue}
                />
                :
                <h1 style={{textAlign:'center'}}>
                    Добавьте криптовалюту
                </h1>
            }
        </div>
    );
}

export default App;    