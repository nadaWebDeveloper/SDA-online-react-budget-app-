import React from 'react'

const ExpenseFrom = () => {
  return (
    <div>
          <form>
            <div>
                <label htmlFor="source">Expense Source</label>
                <input type="number" name="source" id="source" placeholder="Electricity bill"/>
            </div>
            <div>
            <div>
                <label htmlFor="amount">Amount of Expense</label>
                <input type="number" name="amount" id="amount"/>
            </div>
                <label htmlFor="date">Date of Expense</label>
                <input type="date" name="date" id="date"/>
            </div>
            <button >Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseFrom