import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsState, IFilterState, ICard,  } from "../types/cards";

type State = {
    cards:CardsState
    filter:IFilterState
}
const initialState:State = {
    cards:(
        localStorage.getItem('cards') 
        ? 
        JSON.parse(localStorage.getItem('cards')||'{}') 
        :
        [   
            {cryptoName:'ICP', currency: 'USD', value:0, isLiked:'unliked', id:1},
            {cryptoName:'JST', currency: 'USD', value:0, isLiked:'unliked', id:2},
            {cryptoName:'DASH', currency: 'USD', value:0, isLiked:'unliked', id:3},
            {cryptoName:'LUNA', currency: 'USD', value:0, isLiked:'unliked', id:4},
            {cryptoName:'BUSD', currency: 'USD', value:0, isLiked:'unliked', id:5}
        ]
    ),
    filter:(
        localStorage.getItem('isFilter')
        ? 
        JSON.parse(localStorage.getItem('isFilter')||'{}') 
        :
        {isFilter:'unfiltered', buttonDescription:'только залайканые'}
    ),
}


const cardSlice = createSlice({
    
    name:'card',
    initialState,
    reducers:{
        createCard(state,action:PayloadAction<ICard>){
            state.cards.push(
                action.payload
            )
        },
        removeCard(state,action:PayloadAction<ICard>){
            state.cards = state.cards.filter(card => card.id !== action.payload.id)
        },
        likeCard(state,action:PayloadAction<ICard>){
            action.payload.isLiked==='unliked'
            ? 
            state.cards.forEach((card)=>{
                if (card.id===action.payload.id) card.isLiked='liked'
            })
            : 
            state.cards.forEach((card)=>{
                if (card.id===action.payload.id) card.isLiked='unliked'
            })
        },
        filterCards(state,action:PayloadAction){
            if (state.filter.isFilter==='unfiltered') {
                state.filter.isFilter='filtered'
                state.filter.buttonDescription='все'
            }else{
                state.filter.isFilter='unfiltered'
                state.filter.buttonDescription='только залайканые' 
            }
        },
        getValue(state,action:PayloadAction<[ICard,number]>){
            state.cards.forEach((card)=>{
                if (card.id===action.payload[0].id) card.value=action.payload[1]
            })
        },
    }
})

export const {createCard, removeCard, likeCard, filterCards, getValue} = cardSlice.actions 
export default cardSlice.reducer