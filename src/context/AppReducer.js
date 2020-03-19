import firebase from '../libs/firebase';

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
            console.log(action.payload);
            const data = action.payload
            db.collection("expenses").add({
                id: data.id,
                text: data.text,
                amount: data.amount
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