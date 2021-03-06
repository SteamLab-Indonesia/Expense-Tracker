import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ExpenseTracker } from './ExpenseTracker'; 
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
// import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {Navigation} from './components/Navigation';
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <div className="">
      <GlobalProvider>
        {/* <Header/>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction /> */}
        {/* <ExpenseTracker /> */}
        <Navigation />
      </GlobalProvider>
    </div>
  );
}

export default App;
