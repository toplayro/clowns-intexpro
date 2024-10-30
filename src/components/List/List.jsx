import Styles from './List.module.css'
import { Link } from 'react-router-dom';
import { parts } from '../../data/massives';
import { useState } from 'react';

export default function List(props) {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className={Styles.item} 
                onClick={() => {
                    setIsActive(!isActive);
                    props.isNeeded == true && props.onSelect(props.id);
                }}>
                {parts[props.id].name}
            </div>

            <div className={Styles.mini_items}>
                {isActive && parts[props.id].items.map((el) => {return (<Link to={'/article/' + el.statyaID} className={Styles.mini_item}>{el.name}</Link>)})}
            </div>
        </>
    )
}