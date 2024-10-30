import Styles from './Article.module.css'
import Aside from '../Aside/Aside'

export default function Article() {
    return (
        <div className={Styles.article}>
            <div className={Styles.title}></div>

            <div className={Styles.content}>
                <Aside />
            </div>
        </div>
    )
}