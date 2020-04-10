import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    if (transactions)
    {
        for(let i = 0; i < transactions.length;i++) {
            if(transactions[i].amount > 0){
                income += parseInt(transactions[i].amount);
            }else if(transactions[i].amount < 0 ){
                expense += parseInt(transactions[i].amount);
            }
        }
        expense = Math.abs(expense);
    }


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
