import React, {createContext, useReducer,useEffect} from 'react';
import {getAllExpenses} from '../libs/Users';
import AppReducer from './AppReducer';

// const initialState = getAllExpenses();

const initialState = {
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Book', amount:-20},
        {id:3, text:'Salary', amount:150},
        {id:4, text:'Food', amount:-50},
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    // useEffect(() => {
    //     getAllExpenses((expenses_callback) => {
    //         initialState = expenses_callback;
    //         console.log(initialState);
    //     })
    // })

    const [state,dispatch] = useReducer(AppReducer,  initialState);
    console.log(initialState);
    let currentId = initialState['transactions'].length + 1;

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    };

    function addTransaction(e,transaction) {
        e.preventDefault();
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction,
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>{children}</GlobalContext.Provider>)
}