import Styles from './Menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className={Styles.menu}>
            <div className={Styles.items}>
                <a href='https://xn--e1afhkhfhgg.xn--p1ai/' className={Styles.item} text='ГЛАВНАЯ' hover-text='[ ГЛАВНАЯ ]'></a>
                <Link to='/article' className={Styles.item} text='СПРАВОЧНИК' hover-text='[ СПРАВОЧНИК ]'></Link>
                <Link to='/about' className={Styles.item} text='О ЯЗЫКЕ' hover-text='[ О ЯЗЫКЕ ]'></Link>
            </div>
        </div>
    )
}