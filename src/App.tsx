import IncomeForm from './components/IncomeForm'
import ExpenseFrom from './components/ExpenseFrom'
import TargetForSaving from './components/TargetForSetForm'
import TransferForSaving from './components/TransferForSaving'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Navbar from './Navbar'
import Home from './components/Home'

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
      <BrowserRouter>
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/IncomeForm' element={<IncomeForm />} />
<Route path='/ExpenseFrom' element={<ExpenseFrom />} />
<Route path='/TargetForSaving' element={<TargetForSaving savingAmount={savingAmount}/>} />
<Route path='/TransferForSaving' element={<TransferForSaving getSaveTarget = {getSaveTarget} />} />
</Routes>
</BrowserRouter>

      {/* <ToastContainer />
      <br />
      <IncomeForm />
      <br />
      <ExpenseFrom />
      <br />
      <TargetForSaving savingAmount={savingAmount}/>
       <br />
       <TransferForSaving getSaveTarget = {getSaveTarget} /> */}
    </div>
  )
}

export default  App;

