import IncomeForm from './components/IncomeForm'
import ExpenseFrom from './components/ExpenseFrom'
import TargetForSaving from './components/TargetForSetForm'
import TransferForSaving from './components/TransferForSaving'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

;


const App = () => {

const [savingAmount,setSavingAmount] = useState(0);
  const getSaveTarget = (amount : number) =>
  {
    setSavingAmount(amount)
  }
  
  return (
    <div>
      <ToastContainer />
      <br />
      <IncomeForm />
      <br />
      <ExpenseFrom />
      <br />
      <TargetForSaving savingAmount={savingAmount}/>
       <br />
       <TransferForSaving getSaveTarget = {getSaveTarget} />
    </div>
  )
}

export default  App;

