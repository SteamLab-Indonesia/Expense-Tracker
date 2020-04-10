import React, {Component, createContext, useReducer,useEffect} from 'react';
import AppReducer from './AppReducer';
import {getAllExpenses} from '../libs/Users';

// const initialState = getAllExpenses();

const initialState = {
    transactions: [

    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);


    useEffect(() => {
        getAllExpenses().then((data) => {
            dispatch({
                type: 'INITIAL_TRANSACTION',
                payload: data.transactions
            })
        })
    },[])

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