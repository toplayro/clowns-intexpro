import Styles from './Main.module.css'

export default function Main() {
    return (
        <div className={Styles.main}>
            <div className={Styles.title}></div>

            <div className={Styles.content}>
                <div className={Styles.list}>
                    
                </div>

                <div className={Styles.items}>
                    <Card /><Card /><Card /><Card />
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    return (
            <div className={Styles.item}>Тип данных INT, LONG, FLOAT</div>
    )
}