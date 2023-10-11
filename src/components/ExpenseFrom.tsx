import {useState} from 'react'


type Expense =
{
  expenseSource:string;
  expenseAmount: number;
  expenseDate: string
}

const ExpenseFrom = () => {
  const [expense, setExpense] = useState<Expense>({
    expenseSource: '',
    expenseAmount: 0,
    expenseDate : '', 
  });

   
  // const [expense,setExpense] = useState<boolean>(false);

  const handleSubmit = () =>
  {
  }



  return (
    <div>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="expenseSource">Expense Source</label>
                <input type="text" name="expenseSource" id="expenseSource"  placeholder="Electricity bill"/>
            </div>
            <div>
                <label htmlFor="expenseAmount">Amount of Expense</label>
                <input type="number" name="expenseAmount" id="expenseAmount"/>
            </div>
            <div>
                <label htmlFor="expenseDate">Date of Expense</label>
                <input type="date" name="expenseDate" id="expenseDate"/>
            </div>
            <button type="submit">Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseFrom