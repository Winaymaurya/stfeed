import React from 'react'
import './Questionmcq.css'
const Questionmcq = () => {
  return (
    <>
<div className="radio-input">
  <div className="info">
    <span className="ques">What does CSS stand for?</span>
  </div>
  <input type="radio" id="value-1" name="value-radio" defaultValue="value-1" />
  <label htmlFor="value-1">Computer Style Sheets</label>
  <input type="radio" id="value-2" name="value-radio" defaultValue="value-2" />
  <label htmlFor="value-2">Cascading Style Sheets</label>
  <input type="radio" id="value-3" name="value-radio" defaultValue="value-3" />
  <label htmlFor="value-3">Creative Style Sheets</label>
</div>

</>
  )
}

export default Questionmcq