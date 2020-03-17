export default (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("Delete Transaction!");
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
            };
        case 'ADD_TRANSACTION':
            console.log("Transaction Added!");
            console.log(state.transactions)
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}