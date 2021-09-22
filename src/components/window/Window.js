import React, {useState} from 'react';
import close from './../../img/close.png'
import styles from './Window.module.scss'
import DataContainer from "./data/DataContainer";
import ListContainer from "./List/ListContainer";
const Window = ({openClose,value}) => {
    let i=0
    let[check,setCheck]=useState(styles.active)
    let[check1,setCheck1]=useState(null)
    let click=()=>{
        if(i % 2===0){
            setCheck(null)
            setCheck1(styles.active)
        }else {
            setCheck(styles.active)
            setCheck1(null)
        }
        i++

    }
    return (
        <div className={styles.window}>
            <button onClick={openClose} className={styles.button}><img src={close} width='18' height='18' alt='close'/></button>
            <h1>Налоговый вычет</h1>
            <p className={styles.p}>Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
            <DataContainer/>
            {value===true? <ListContainer/>:null}
            <div className={styles.wap}>
                <label htmlFor="1">Что уменьшаем?</label>
                <button onClick={click} className={check} id='1'>Платёж</button>
                <button onClick={click} className={check1} id='1'>Срок</button>
            </div>
            <button onClick={openClose} className={styles.add} >Добавить</button>
        </div>
    );
};

export default Window;