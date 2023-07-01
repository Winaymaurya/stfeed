import React from 'react'
import './Teacher.css'
import teacherApi from '../../teacherapi'
import {Link, useNavigate} from 'react-router-dom'
const Teacher = ({menuData}) => {
  const navigate=useNavigate()
  const handle4=()=>{
    navigate("/Teacherfeedbackquestion")
  }
  const handle5=()=>{
    navigate("/Teacherprofile")
  }
  return (
    <>
      <div className="teachercard">

        {menuData.map((e) => {
          return (
            <>
              <div className="card">
                <div className="card-border-top border-2">
                </div>
                <div className="img">
                </div>
                <span> {e.name}</span>
                {/* <span></span> */}
                <p className="job"> {e.branch}</p>
                {/* <button> Profile</button> */}
                <button onClick={handle4} > Give FeedBack</button>
                <a onClick={handle5}>Vist Profile..</a>
              </div>
            </>
          )
        })}
      </div>

    </>
  )
}

export default Teacher