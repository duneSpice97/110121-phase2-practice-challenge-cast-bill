import React, {useEffect, useState} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const billAPI = `http://localhost:8002/bills`

export default function App() {
  //start here with your code for step one
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(billAPI)
      .then((res) => res.json())
      .then((data) => setBills(data));
  }, [])

  // console.log(bills) // I couldn't figure out why two items were being returned by this console.log()

  function addToCast(bill) {
    console.log(bill)
    const billToAdd = bill;
    // return <BillsCast bills={bill}/>
    // END OF TEST, this is where I'm stuck. I think I could have figured it out if I hadn't gotten stuck 
    // on the return statement in BillCollection. 
  }

  function fireBill(bill) {
    // code to remove Bill card
    // console.log(bill)
  }

  return (
    <div>
      <BillsCast bills={billToAdd}/>
      <BillCollection bills={bills} addToCast={addToCast} fireBill={fireBill}/>
    </div>
  );
}

