import React from 'react'

const TargetForSaving = () => {
  return (
    <div>
    <form>
        <div>
                <label htmlFor="target">Set Target</label>
                <input type="number" name="target" id="target" />
                <button >Reset</button>
        </div>
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