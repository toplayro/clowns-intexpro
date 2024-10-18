import Styles from './Menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className={Styles.menu}>
            <div className={Styles.items}>
                <Link to='/' className={Styles.item} text='ГЛАВНАЯ' hover-text='[ ГЛАВНАЯ ]'></Link>
                <Link to='/article' className={Styles.item} text='СПРАВОЧНИК' hover-text='[ СПРАВОЧНИК ]'></Link>
                <Link to='/about' className={Styles.item} text='О ЯЗЫКЕ' hover-text='[ О ЯЗЫКЕ ]'></Link>
            </div>
        </div>
    )
}