import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
// import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'

export const ExpenseTracker = () => {
  return (
    <div className="">
      <GlobalProvider>
        <Header/>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}
