import СurrencyСard from './СurrencyСard';
import "../styles/CardList.css";
import { useAppSelector } from '../hooks/ReduxHooks';

const Cardlist:React.FC = () => {
    const cards = useAppSelector(state=> state.cards.cards)

    localStorage.setItem('cards',JSON.stringify(cards))
    return (
        <div className='Cardlist'>
            {
            cards.length
                ?
                cards.map((card) => 
                <СurrencyСard 
                    card={card} 
                    key={card.id}
                />)
                :
                <h1>
                    Добавьте криптовалюту
                </h1>
            }
        </div>
    );
};

export default Cardlist;
