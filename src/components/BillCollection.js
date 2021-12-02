import React, {useState} from 'react';
import BillSpecs from "./BillSpecs.js"
import BillCard from './BillCard.js'

function BillCollection({bills, addToCast, fireBill}) {
  // console.log(bills)

  // I was stuck below because I forgot to return the component. I was confused and
  //  thought the reason it wasn't going through was because my initial data was returing [] before the data logged :/
  const renderEachBill = bills.map(bill => {
    return (
    <BillCard
      key={bill.id}
      bill={bill}
      addToCast={addToCast}
      fireBill={fireBill}
    />
  )})

  return (
    <div className="ui four column grid">
      <div className="row">
        {renderEachBill}
      </div>
    </div>
  );
}
export default BillCollection

