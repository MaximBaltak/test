import React from 'react';
import styles from './List.module.scss'
import Contribution from "./contribution/Contribution";
const List = ({list}) => {
    console.log(list)
    return (
        <div className={styles.container}>
            <p>И того можно внести в качетве досрочных:</p>
            <ul  className={styles.list}>
                {list.map(el=><div key={el.id}><Contribution id={el.id} text={el.sum} text2={el.years}/></div>)}
            </ul>
        </div>
    );
};

export default List;