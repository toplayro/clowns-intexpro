import Styles from './Article.module.css'

export default function Article() {
    return (
        <div className={Styles.article}>
            <img src="/images/Заголовок.png" className={Styles.title} alt="" />

            <div className={Styles.content}>
                
            </div>
        </div>
    )
}