import Styles from './Statya.module.css'
import { parts, statyas } from '../../data/massives'
import { useParams } from "react-router-dom"
import List from '../List/List'

export default function Statya() {
    const { id } = useParams()

    const copyTextToClipboard = async (text) => {navigator.clipboard.writeText(text)};

    return (
        <div className={Styles.main}>
            <div className={Styles.aside}>{parts.map((el) => {return(<List id = {el.id} isNeeded={false}/>)})}</div>

            <div className={Styles.content}>
                {statyas[id].texts.map((el) => {
                    return (
                        <>
                            {el.tag === 'title' && <div className={Styles.title}>{el.text}</div>}
                            {el.tag === 'text' && <div className={Styles.text}>{el.text}</div>}
                            {el.tag === 'empty' && <div className={Styles.empty}></div>}
                            {el.tag === 'code' && <div className={Styles.codeBox}>
                                <div className={Styles.top}>
                                    <div className={Styles.lang}>PYTHON</div>
                                    <div className={Styles.copy} onClick={() => copyTextToClipboard(el.forCopy)}>copy</div>
                                </div>
                                {el.code.map((el, index) => {return (<div className={Styles.code}><span className={Styles.number}>{index+1 + '.'}</span>{'\u00A0\u00A0 ' + el}</div>)})}
                            </div>}
                        </>
                    )
                })}
            </div>
        </div>
    )
}