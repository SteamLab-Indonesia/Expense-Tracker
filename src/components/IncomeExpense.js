import React,{useContext,useEffect,useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);
    useEffect(() => {
        let result = 0; 
        let income = 0;
        let expense = 0
        for(let i = 0; i < transactions.length;i++) {
            if(transactions[i].amount > 0){
                income += transactions[i].amount;
            }else if(transactions[i].amount < 0 ){
                expense += transactions[i].amount;
            }
            setIncome(income);
            setExpense(Math.abs(expense));
        }
    },[])

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}
