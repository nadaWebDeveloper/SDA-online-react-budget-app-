import {FormEvent , useState , ChangeEvent} from 'react'


type ExpenseBudget =
{
  expenseSource:string;
  expenseAmount: number;
  expenseDate: string
}

const ExpenseFrom = () => {

  const [expense, setExpense] = useState<ExpenseBudget>({
    expenseSource: '',
    expenseAmount: 0,
    expenseDate : '', 
  });

  const [expenses, setExpenses] = useState<ExpenseBudget[]>([]);
   const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
 {
  const {name , value} = event.target;
  setExpense({ ...expense, [name]:value});
 }
   
  // const [expense,setExpense] = useState<boolean>(false);
 
  const [isError,setIsError ] = useState(false);
  const handleSubmit = (event: FormEvent) =>
  {
    event.preventDefault();
    if(expense.expenseSource && expense.expenseAmount && expense.expenseDate)
    {
      const newExpense = {
        //name of input:value useState.name input
        expenseSource:expense.expenseSource, 
        expenseAmount:expense.expenseAmount,
        expenseDate:expense.expenseDate,
        }; 
        setExpenses([ ...expenses, newExpense]);
        setIsError(false);
        console.log("change all done")
    }
    else
    {
      setIsError(true);
      console.log("you miss input")

    }
    //to reset value
    setExpense({
      expenseSource: '',
      expenseAmount: 0,
      expenseDate : '', });
 
  }


  return (
    <div>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="expenseSource">Expense Source</label>
                <input type="text" name="expenseSource" id="expenseSource"  placeholder="Electricity bill" onChange={handleChange} value={expense.expenseSource}/>
            </div>
            <div>
                <label htmlFor="expenseAmount">Amount of Expense</label>
                <input type="number" name="expenseAmount" id="expenseAmount" onChange={handleChange} value={expense.expenseAmount}/>
            </div>
            <div>
                <label htmlFor="expenseDate">Date of Expense</label>
                <input type="date" name="expenseDate" id="expenseDate" onChange={handleChange} value={expense.expenseDate}/>
            </div>
            <button type="submit">Add Expense</button>
        </form>
        <ul>
          {
            expenses.map((expense: ExpenseBudget) =>(
            <li key={expense.expenseAmount}>{expense.expenseSource}: {expense.expenseAmount}$ On {expense.expenseDate}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default ExpenseFrom