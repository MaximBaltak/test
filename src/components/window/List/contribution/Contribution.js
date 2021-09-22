import React from 'react';
import styles from './Contribution.module.scss'
const Contribution = ({id,text,text2}) => {

    return (
        <li className={styles.el}>
            <input type='checkbox' id={id}/>
            <label htmlFor={id}/>
            <p className={styles.text}>{text} <span>{text2}</span></p>
        </li>
    );
};

export default Contribution;