import Styles from './About.module.css'

export default function About() {
    return (
        <div className={Styles.about}>
            <div className={Styles.content}>
                <div className={Styles.title}>ЯЗЫК ПРОГРАММИРОВАНИЯ PYTHON</div>
                <br />
                <br />
                <div className={Styles.text}>
                    Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении (ML). Разработчики используют Python, потому что он эффективен, прост в изучении и работает на разных платформах.
                    <br /><br />
                    Программы на Python гибкие, легко масштабируются, а для их создания не требуется содержать большую команду разработчиков. У языка простой и понятный синтаксис и мощное сообщество, которое его развивает и популяризирует.
                    <br /><br />
                    Главное преимущество Python — его простота. Не нужно тратить месяцы на изучение сложного синтаксиса, как в C++, и переживать об утечках памяти. Язык всё сделает за вас.
                </div>
            </div>
        </div>
    )
}