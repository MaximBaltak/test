import React from 'react';
import  styles from './Data.module.scss'
const Data = ({add,change,value,check}) => {
    return (
        <div className={styles.Data}>
            <label  htmlFor="numbers">Ваша зарплата за месяц</label>
            {check===true ? <input type="text" id='numbers' onChange={e=>change(e.target.value)} value={value} required placeholder='Введите данные'/>:
                <input type="text" style={{border: 'solid 1px red'}} id='numbers' onChange={e=>change(e.target.value)} value={value} required placeholder='Введите данные'/>
            }
            <button onClick={add} className={styles.button} >Рассчитать</button>
        </div>
    );
};

export default Data;