import React from 'react'

const IncomeForm = ()=> {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="source">Income Source</label>
                <input type="number" name="source" id="source" placeholder="Salary"/>
            </div>
            <div>
            <div>
                <label htmlFor="amount">Amount of Income</label>
                <input type="number" name="amount" id="amount"/>
            </div>
                <label htmlFor="date">Date of Income</label>
                <input type="date" name="date" id="date"/>
            </div>
            <button>Add Income</button>
        </form>
    </div>
  )
}

export default  IncomeForm;