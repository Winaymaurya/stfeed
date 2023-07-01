import React from 'react'
import './question.css'
const Question = () => {
  return (
    <>
    <div className="quescard">
        <span>1. Rate overall Communicaton skills</span>
<div className="mydict">
  <div>
    <label>
      <input type="radio" name="radio"/><span>1</span>
    </label>
    <label>
      <input type="radio" name="radio" /><span>2</span>
    </label>
    <label>
      <input type="radio" name="radio" /><span>3</span>
      </label>
    <label>
      <input type="radio" name="radio" /><span>4</span>
      </label>
    <label>
      <input type="radio" name="radio"  defaultChecked /><span>5</span>
      </label>
  </div>
</div>
</div>

    </>
  )
}

export default Question
