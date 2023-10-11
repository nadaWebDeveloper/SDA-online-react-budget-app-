
const TargetForSaving = () => {
 

  const handleSubmit = () =>
  {
  }



  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor="targetSave">Set Target</label>
                <input type="number" name="targetSave" id="targetSave" />
        </div>
                <button type="submit">Reset</button>
    </form>

        <div>
             <h5>Current Saving : 0</h5>
             <h5>Target : 0</h5>
             <h5>Progress : </h5><progress max="100" value={20}/> 
        </div>
    </div>
  )
}

export default TargetForSaving