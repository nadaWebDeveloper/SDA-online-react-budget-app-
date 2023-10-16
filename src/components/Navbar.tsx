import { Link } from "react-router-dom"
import '../App.css'

const Navbar = () => {
  return (
<>
<nav>
    <ul className="nav">
        <li>
         <Link to="/" className="line">Home</Link>
        </li>
        <li>
         <Link to="/IncomeForm" className="line">Income Form</Link>
        </li>
        <li>
        <Link to="/ExpenseFrom" className="line">Expense From</Link>
        </li>
        <li>
        <Link to="/TargetForSaving" className="line">Target For Saving</Link>
        </li>
        <li>
        <Link to="/TransferForSaving" className="line">Transfer For Saving </Link>
        </li>
    </ul>
</nav>
</> 
 )}

export default Navbar