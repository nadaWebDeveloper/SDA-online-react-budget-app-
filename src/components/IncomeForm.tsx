import {FormEvent , useState , ChangeEvent} from 'react'
import { toast } from 'react-toastify';
import {FaTrash} from 'react-icons/fa'
import '../App.css'



type incomeBudget =
  {
    id: number;
    incomeSource:string;
    incomeAmount: number;
    incomeDate: string
  }
  

const IncomeForm = ()=> {
  
 const [income, setIncome] = useState<incomeBudget>({
      id:0,
      incomeSource: '',
      incomeAmount: 0,
      incomeDate : '', 
      });

      
   const [incomeArray, setIncomeArray] = useState<incomeBudget[]>([]);
   const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
   {
      const {name , value} = event.target;
      setIncome((prevIncome) => {
        return {...prevIncome, [name]: value};
      });
   }
   


    //useState() active with button(type:submit) & form(onSubmit)
    const handleSubmit = (event: FormEvent) =>
    {
      event.preventDefault();
      if(income.incomeAmount && income.incomeSource && income.incomeDate)
      {
        const newIncome = { ...income, id: new Date().getMilliseconds()}
        setIncomeArray((prevIncomeArray) =>
         { 
          return [...prevIncomeArray, newIncome]; 
        });
        console.log(incomeArray)
        toast.success("New Income Is Added")  
      }
      else
      {
      toast.error("You missing feild")
      }
        //to reset value
        setIncome({
          id:0,
      incomeSource: '',
      incomeAmount: 0,
      incomeDate : '', });
    }


    const handleDelete = (id: number) => 
    {
     const filteredIncomeArray = incomeArray.filter((income) => income.id !== id)
     setIncomeArray(filteredIncomeArray); //to update array after deleting

    };

  return (
    <div className='box'>
        <form onSubmit={handleSubmit} className='todoForm' >
            <div className='todoForm'>
                <label htmlFor="incomeSource">Source of Income</label>
                <input type="text"   name="incomeSource" id="incomeSource"  placeholder="Salary" onChange={handleChange} value={income.incomeSource}  />
            </div>
            <div className='todoForm'>
                <label htmlFor="incomeAmount">Amount of Income</label>
                <input type="number" name="incomeAmount" id="incomeAmount" onChange={handleChange} value={income.incomeAmount}  placeholder="10000 $"  />
            </div>
            <div className='todoForm'>
                <label htmlFor="incomeDate">Date of Income</label>
                <input type="date" name="incomeDate" id="incomeDate" placeholder="Day / Month / Year" onChange={handleChange} value={income.incomeDate} required />
            </div>
            <button type="submit">Add Income</button>
        </form>
        
        <div className='boxVisible'>
         <ul>
        {incomeArray.length > 0  ? (  
        incomeArray.map((income, index) =>(
        <li key={index} className='boxCenter'> 
        {income.incomeSource} : {income.incomeAmount}$  On {income.incomeDate}
         <button  onClick={() => handleDelete(income.id)}> 
          <FaTrash/> 
          </button>
        </li> 

        ))
        ) : (
        <p>No Data For Salary</p>
        )
      }
    </ul> 
    </div>

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

    // const handleSubmit = (event: FormEvent) =>
    // {
    //   event.preventDefault();
    //   if(income.incomeAmount && income.incomeSource && income.incomeDate)
    //   {
    //     const newIncome = {
    //       //name of input:value useState.name input
    //       incomeSource:income.incomeSource, 
    //       incomeAmount:income.incomeAmount,
    //       incomeDate:income.incomeDate,
    //       }; //to update attribute use function set....() to store data into income, amount & date
    //       setIncomeArray([ ...incomeArray, newIncome]);
    //       setIsError(false);
    //       console.log("change all done")
    //   }
    //   else
    //   {
    //     setIsError(true);
    //     console.log("you miss input")

    //   }
    //   //to reset value
    //   setIncome({
    //     //the same of name input
    //     incomeSource:'', 
    //     incomeAmount:0,
    //     incomeDate:''});
   
    // }
    // <ul>
    // {   incomeArray.length > 0  ? (  
    //     incomeArray.map((income, index) =>(
    //     <li key={index}> 
    //     {income.incomeSource} : {income.incomeAmount}$  On {income.incomeDate}
    //      <button  onClick={() => handleDelete(income.id)}> 
    //       <FaTrash/> 
    //       </button>
    //     </li> 

    //     ))) : (
    //     <p>No Data For Salary</p>
    //     )
    //   }
    // </ul>