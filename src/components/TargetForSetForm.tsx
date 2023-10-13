import {FormEvent , useState , ChangeEvent} from 'react'

type targetForSavingProps =
{
  savingAmount: number;
}

const TargetForSaving = (props: targetForSavingProps) => {

 const [target, setTarget] = useState(0);
 
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
  {
    setTarget(Number(event.target.value))
  }


  const handleSubmit = (event: FormEvent) =>
  {
    event.preventDefault();
    setTarget(0); 
   
  }



  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor="saveTarget">Set Target</label>
                <input type="number" name="saveTarget" id="saveTarget" onChange={handleChange} value={target} required />
        </div>
                <button type="submit">Reset</button>
    </form>

        <div>
             <h5>Current Saving :{props.savingAmount} </h5>
             <h5>Target : {target} </h5>
             <h5>Progress : </h5><progress max="100" value={20}/> 
        </div>
    </div>
  )
}

export default TargetForSaving