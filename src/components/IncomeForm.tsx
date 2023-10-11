import {FormEvent , useState , ChangeEvent} from 'react'

type incomeBudget =
  {
    incomeSource:string;
    incomeAmount: number;
    incomeDate: string
  }
  

const IncomeForm = ()=> {
  

    const [income, setIncome] = useState<incomeBudget>({
      incomeSource: '',
      incomeAmount: 0,
      incomeDate : '', 
      });
      
   const [incomes, setIncomes] = useState<incomeBudget[]>([]);
   const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
 {
  const {name , value} = event.target;
  setIncome({ ...income, [name]:value});
 }
   

    const [isError,setIsError ] = useState(false);
    //useState() active with button(type:submit) & form(onSubmit)
    const handleSubmit = (event: FormEvent) =>
    {
      event.preventDefault();
      if(income.incomeAmount && income.incomeSource && income.incomeDate)
      {
        const newIncome = {
          //name of input:value useState.name input
          incomeSource:income.incomeSource, 
          incomeAmount:income.incomeAmount,
          incomeDate:income.incomeDate,
          }; //to update attribute use function set....() to store data into income, amount & date
          setIncomes([ ...incomes, newIncome]);
          setIsError(false);
          console.log("change all done")
      }
      else
      {
        setIsError(true);
        console.log("you miss input")

      }
      //to reset value
      setIncome({
        //the same of name input
        incomeSource:'', 
        incomeAmount:0,
        incomeDate:''});
   
    }

    const deleteItem = (indexToDelete: number) => {
      console.log({indexToDelete})
      const newExpenses = [...incomes];
      newExpenses.splice(indexToDelete, 1);
      setIncomes(newExpenses);
      console.log("Delete from array")
      console.log({incomes})
      console.log({...incomes})


  
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="incomeSource">Source of Income</label>
                <input type="text"   name="incomeSource" id="incomeSource"  placeholder="Salary" onChange={handleChange} value={income.incomeSource}/>
            </div>
            <div>
                <label htmlFor="incomeAmount">Amount of Income</label>
                <input type="number" name="incomeAmount" id="incomeAmount" onChange={handleChange} value={income.incomeAmount}/>
            </div>
            <div>
                <label htmlFor="incomeDate">Date of Income</label>
                <input type="date" name="incomeDate" id="incomeDate" onChange={handleChange} value={income.incomeDate} />
            </div>
            <button type="submit">Add Income</button>
        </form>
        <ul>
        {
            incomes.map((income: incomeBudget, index: number) =>(
            <li key={index}>{income.incomeSource}: {income.incomeAmount}$ On {income.incomeDate}
                        <br /> <button  onClick={() => deleteItem(index)}>Delete</button>
            </li> 

            ))
          }
        </ul>
    </div>
  )
}

export default  IncomeForm;



//  // for get input from html for income source
//  const [income, setIncome] = useState("");
//  const handleIncomeChange = (event: ChangeEvent<HTMLInputElement>) =>
//  {
//    setIncome(event.target.value);
//  }


//   // for get input from html for income amount
//   const [amount, setAmount] = useState("");
//   const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) =>
//   {
//    setAmount(event.target.value);
//   }


//    // for get input from html for income date
//    const [date, setDate] = useState("");
//    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) =>
//    {
//      setDate(event.target.value);
//    }

//in handleSubmit
  //to reset input to Aش empty house after submit with value input to change value from set.... that mean change value by set.... and store value on income ,to put value date store on income in input
    //  setIncome('');
    //  setAmount('');
    //  setDate('');