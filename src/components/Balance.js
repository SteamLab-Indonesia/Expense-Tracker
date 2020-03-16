import React,{useContext,useEffect,useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const [balance,setBalance] = useState(0);
    useEffect(() => {
        let result = 0; 
        for(let i = 0; i < transactions.length;i++) {
            result += transactions[i].amount;
        }
        setBalance(balance + result);
    },[])



    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}
