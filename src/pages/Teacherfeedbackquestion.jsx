import React from 'react'
import Question from "../component/layout/Question"
import Questionmcq from '../component/layout/Questionmcq'
import './Teacherfeedbackquestion.css'
const Teacherfeedbackquestion = () => {
  return (<>
 
    <div className="header">
     <h4> Answer the foloowing questions Corectetly </h4>
    </div>
    <div className="maincont">
        {/* <div className="questions">
          <div className="ques"> <Question/> </div>
          <div className="ques"> <Question/></div>
        </div>
        <div className="questions">
        <div className="centerQues">
          <Question/>
          </div>
        </div>
        <div className="questions">
          <div className="ques"> <Question/></div>
          <div className="ques"> <Question/></div>
        </div>
        <div className="questions">
        <div className="centerQues">
          <Question/>
          </div>
        </div> */}
        <div className="quesimg">
       
        </div>
        <div className="question">
          <Question/>
          <Question/>
          <Questionmcq/>
          <Question/>
          <Question/>
          <Question/>
          </div> 
                 
    </div>
    </>
    )
}

export default Teacherfeedbackquestion