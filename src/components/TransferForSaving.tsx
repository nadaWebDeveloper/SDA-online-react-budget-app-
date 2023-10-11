
const TransferForSaving = () => {
   
  const handleSubmit = () =>
  {
    
  }



  return (
    <div>
        <h3>Current Balance : 5000</h3>
    <form onSubmit={handleSubmit}>
        <div>
                <label htmlFor="transferSave">Transfer to saving account: </label>
                <input type="number" name="transferSave" id="transferSave" />
        </div>
                <button type="submit">Transfer</button>
    </form>
    </div>
  )
}

export default TransferForSaving