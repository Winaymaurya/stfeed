import React from 'react'
import './afterstudentlogin.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import DrawerProfile from '../component/layout/DrawerProfile'
const AfterStudentLogin = () => {
  const navigate = useNavigate()
  const handle2 = () => {
    navigate("/SelectTeacher")
  }

  return (

    <>
      <body>
        <nav>
          <div className="nav">
            <AnchorLink className='teacherFeedback' href="#teacher">Teacher's FeedBack</AnchorLink>
            <AnchorLink className='teacherFeedback'  href="#campus">Campus FeedBack</AnchorLink>
          </div>
          <div className="profile">
            <ChakraProvider>

              <DrawerProfile />

            </ChakraProvider>
          </div>
        </nav>
        <div className="teacher" id='teacher'>
          <div className="data">
            <p>   Give Constructive </p>
            <p className="words">
              <span>FeedBack</span>  to Your Respected Teachers, Suggest and help them to improve their Skills.
            </p>
            <button className="button-26" role="button" onClick={handle2}>Proceed for FeedBack</button>

          </div>
          <div className="image">
            <img src="https://img.freepik.com/free-vector/organic-flat-feedback-concept_52683-62653.jpg?size=626&ext=jpg" alt="" />
          </div>
        </div>
        <div className="campus" id='campus'>
          <div className="image">
            <img src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?size=626&ext=jpg" alt="" />
          </div>
          <div className="data campusdata">
            <p>   Give Constructive </p>
            <p className="words">
              <span>FeedBack</span>  to Your Respected Teachers, Suggest and help them to improve their Skills.
            </p>
            <button className="button-26" >Proceed for FeedBack</button>

          </div>
        </div>
      </body>
    </>
  )
}



export default AfterStudentLogin