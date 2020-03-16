import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const { deleteTransaction } = useContext(GlobalContext);

    let sign;
    let signStyle;
    if(transaction.amount > 0 ) {
        sign = '+';
        signStyle = 'plus'
    } else {
        sign = '-';
        signStyle = 'minus'
    }
    // const context = useContext(GlobalContext);
    // const { transactions } = useContext(GlobalContext);

    return (
        <li className={signStyle}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() =>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
