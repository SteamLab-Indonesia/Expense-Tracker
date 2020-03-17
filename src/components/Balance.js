import React,{useContext,useEffect,useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let balance = 0;
    let result = 0; 
    for(let i = 0; i < transactions.length;i++) {
        balance += parseInt(transactions[i].amount);
    };


    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}
