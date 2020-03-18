import firebase from 'firebase/app';
import 'firebase/firestore';

export default (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("Delete Transaction!");
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            };
        case 'ADD_TRANSACTION':
            const db = firebase.firestore();
            console.log("Transaction Added!");
            console.log(state.transactions)
            db.collection("users").add({
                first: 'Xavier',
                last: 'Tan',
                born: 2002
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id)
            })
            .catch((err) => {
                console.err("Error adding documents: ",err);
            })
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}