import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    const { transactions } = useContext(GlobalContext);
    const { addTransaction } = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [ amount,setAmount ] = useState(0);

    // console.log()

    // const addTransaction = (e) => {
    //     e.preventDefault();
    //     transactions.push([{id: {}, text:text,amount:amount}]);
    //     console.log(transactions);
    // }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={(e) => addTransaction(e,{id: transactions.length+1, text:text, amount:amount})}>Add transaction</button>
            </form>
        </div>
    )
}