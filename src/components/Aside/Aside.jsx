import Styles from './Aside.module.css'
import { Link } from 'react-router-dom'

import { parts } from '../../data/massives'
import { useState } from 'react'

import List from '../List/List'
import Cards from '../Cards/Cards'

export default function Aside() {
    const [selectedId, setSelectedId] = useState(0);
    return (
        <div className={Styles.main}>
            <div className={Styles.aside}>{parts.map((el) => {return(<List id = {el.id} onSelect={setSelectedId} isNeeded={true}/>)})}</div>
            <div className="ccc"><Cards id={selectedId}/></div>
        </div>
    )
}