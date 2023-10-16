import {FormEvent , useState , ChangeEvent} from 'react'
import {FaTrash} from 'react-icons/fa'
import { toast } from 'react-toastify';


type ExpenseBudget =
{
  id: number;
  expenseSource:string;
  expenseAmount: number;
  expenseDate: string
}

const ExpenseFrom = () => {

  const [expense, setExpense] = useState<ExpenseBudget>({
    id:0,
    expenseSource: '',
    expenseAmount: 0,
    expenseDate : '', 
  });

  const [expenseArray, setExpenseArray] = useState<ExpenseBudget[]>([]);
   const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
 {
  const {name , value} = event.target;
  setExpense({ ...expense, [name]:value});
 }
   
 
  const [isError,setIsError ] = useState(false);
  const handleSubmit = (event: FormEvent) =>
  {
    event.preventDefault();
    if(expense.expenseSource && expense.expenseAmount && expense.expenseDate)
    {
      const newIncome = { ...expense, id: new Date().getMilliseconds()}
      setExpenseArray((prevIncomeArray) =>
    { 
     return [...prevIncomeArray, newIncome]; 
   });
   console.log(expenseArray)
   toast.success("New Expense Is Added") 
    }
    else
    {
       toast.error("You missing feild")
    }
    //to reset value
    setExpense({
      id:0,
      expenseSource: '',
      expenseAmount: 0,
      expenseDate : '', });
 
  }


  const handleDelete = (id: number) => 
  {
   const filteredIncomeArray = expenseArray.filter((expense) => expense.id !== id)
   setExpenseArray(filteredIncomeArray); //to update array after deleting

  };

  return (
    <div className='box'>
          <form onSubmit={handleSubmit} className='todoForm'>
            <div className='todoForm'>
                <label htmlFor="expenseSource">Expense Source</label>
                <input type="text" name="expenseSource" id="expenseSource"  placeholder="Electricity bill" onChange={handleChange} value={expense.expenseSource} />
            </div>
            <div className='todoForm'>
                <label htmlFor="expenseAmount">Amount of Expense</label>
                <input type="number" name="expenseAmount" id="expenseAmount"  placeholder="10000 $" onChange={handleChange} value={expense.expenseAmount} required/>
            </div>
            <div className='todoForm'>
                <label htmlFor="expenseDate">Date of Expense</label>
                <input type="date" name="expenseDate" id="expenseDate" onChange={handleChange} value={expense.expenseDate} required/>
            </div>
            <button type="submit">Add Expense</button>
        </form>

<div className='boxVisible'>
         <ul>
        {expenseArray.length > 0  ? (  
        expenseArray.map((expense, index) =>(
        <li key={index} className='boxCenter'> 
         {expense.expenseSource} : {expense.expenseAmount}$  On {expense.expenseDate}
         <button  onClick={() => handleDelete(expense.id)}> 
          <FaTrash/> 
          </button>
        </li> 

        ))
        ) : (
        <p>No Data For Expense</p>
        )
      }
    </ul> 
    </div>
    </div>
  )
}

export default ExpenseFrom