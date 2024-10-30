import Styles from './Cards.module.css'
import { Link } from 'react-router-dom'
import { parts } from "../../data/massives"

export default function Cards(props) {
    return (
        <div className={Styles.items_cards}>
            {parts[props.id].items.map((el) => {return (<Link to={'/article/' + el.statyaID} className={Styles.item_cards}>{parts[props.id].items[el.id].name}</Link>)})} 
        </div>
    )
}