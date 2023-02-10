import { useDispatch } from "react-redux";
import CardForm from "./components/CardForm";
import Cardlist from "./components/CardList";
import MyButton from "./components/MyButton";
import { useAppSelector } from "./hooks/ReduxHooks";
import { filterCards } from "./store/cardSlise";
import "./styles/App.css"



function App() {
  const dispatch = useDispatch()
  const filter = useAppSelector(state=> state.cards.filter)
  return (
    <div className = "App">
      <CardForm/>
      <div className={"filter "+filter.isFilter}>
        <MyButton
            onClick={() => dispatch(filterCards())}
        >
            показать {filter.buttonDescription} карточки
        </MyButton>
      </div>
      <hr/>
      <Cardlist/>          
    </div>
  );
}

export default App;
