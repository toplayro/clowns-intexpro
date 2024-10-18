import Styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className={Styles.header}>
            <Link to='/'><img src="/images/Логотип.svg" className={Styles.images} alt="" /></Link>
        </div>
    )
}