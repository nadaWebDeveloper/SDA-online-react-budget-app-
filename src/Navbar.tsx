import { Link } from "react-router-dom"
const Navbar = () => {
  return (
<>
<nav>
    <ul>
    <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/IncomeForm">Income Form</Link>
        </li>
        <li>
        <Link to="/ExpenseFrom">Expense From</Link>
        </li>
        <li>
        <Link to="/TargetForSaving">Target For Saving</Link>
        </li>
        <li>
        <Link to="/TransferForSaving">Transfer Fo rSaving </Link>
        </li>
    </ul>
</nav>
</> 
 )}

export default Navbar