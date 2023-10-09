import React from 'react'

const TransferForSaving = () => {
  return (
    <div>
        <h3>Current Balance : 5000</h3>
         <form>
        <div>
                <label htmlFor="target">Transfer to saving account: </label>
                <input type="number" name="target" id="target" />
        </div>
        <button >Transfer</button>
    </form>
    </div>
  )
}

export default TransferForSaving