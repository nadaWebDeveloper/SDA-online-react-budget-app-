import {FormEvent , useState , ChangeEvent} from 'react'
import { useNavigate } from "react-router-dom";


type TransferForSavingProps =
{
  getSaveTarget : (amount : number) => void;
}

const TransferForSaving = (props: TransferForSavingProps) => {
const navigate = useNavigate()
const [transferAmount, setTransferAmount] = useState(0);


const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
   {
    setTransferAmount(Number(event.target.value))
   }


const handleSubmit = (event: FormEvent) =>
  {
    event.preventDefault();
    // props.attribute on type (varaible to useState)
    props.getSaveTarget(transferAmount);
    setTransferAmount(0);
    navigate('/TargetForSaving');

  }



  return (
    <div className='box'>
      <div className='boxVisible'>
      <h3 >Current Balance : 5000</h3>
      </div>
    <form onSubmit={handleSubmit} className='todoForm'>
        <div className='todoForm'>
                <label htmlFor="transferSave">Transfer to saving account: </label>
                <input type="number" name="transferSave" id="transferSave"  onChange={handleChange} value={transferAmount} required />
        </div>
                <button type="submit">Transfer</button>
    </form>
    </div>
  )
}

export default TransferForSaving