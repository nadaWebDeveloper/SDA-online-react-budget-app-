import React from 'react'
import IncomeForm from './components/IncomeForm'
import ExpenseFrom from './components/ExpenseFrom'
import TargetForSaving from './components/TargetForSetForm'
import TransferForSaving from './components/TransferForSaving'



const App = () => {
  return (
    <div>
      <br />
      <IncomeForm />
      <br />
      <ExpenseFrom />
      <br />
      <TargetForSaving />
       <br />
       <TransferForSaving />
    </div>
  )
}

export default  App;