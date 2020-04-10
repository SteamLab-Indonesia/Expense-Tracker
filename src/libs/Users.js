import firebase from './firebase';

export const getAllExpenses = () => {
  
  console.log('getAllExpenses call fb')
  return new Promise((resolve, reject) => {
    const db = firebase.firestore();
    const userRef = db.collection("expenses").orderBy('id', 'asc')
      .get().then((snapshot) => {
    //   console.log(snapshot.docs[0].data());
    //   console.log(snapshot.docs);
      let expenses_list = {transactions:[]};
      snapshot.forEach(doc => {
          expenses_list.transactions.push({
            id: doc.data().id,
            text: doc.data().text,
            amount: doc.data().amount
          });
          console.log("Doc data : ",doc.data());
      })
      // console.log(expenses_list);
      // console.log("snapshot: ", snapshot);
      resolve(expenses_list);
    }).catch((err)=>reject(err));
  })
}