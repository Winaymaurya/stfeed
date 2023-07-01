import React from 'react'
import './TeacherProfile.css'
import {useNavigate} from 'react-router-dom'
const Teacherprofile = () => {
    const navigate=useNavigate()
    const handle3=()=>{
      navigate("/Teacherfeedbackquestion")
    }
  return (
    <>
    <div className="mainProile111">
        <div className="subProfile1">
             <div className="imgdata">
                 <div className="teacherimg">
                 <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg" alt="" />
              </div>
              <div className="teachername">
                 Mr. Vinay Kumar Maurya
              </div>
              <div className="branch">
                 Branch: BCA ,MCA
              </div>
              <p className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum expedita reiciendis debitis voluptate beatae a quas aliquid hic repudiandae.
              </p>
              <div className="btns">
                  <button className='btn' onClick={handle3}>Give FeedBack</button>
                  <button className='btn'>Follow</button>
              </div>
             </div>



             <div className="links">
                 <h4>Personal Details</h4>
               <div className="link"><div> Name : </div> <div> Vinay Kumar Maurya</div></div>
               <div className="link"><div> Email : </div> <div> vinaymaurya@gmail.com</div></div>
               <div className="link"><div> Twitter : </div> <div> @Winaymaurya</div></div>
               <div className="link"><div> Postion : </div> <div> Professor</div></div>
               <div className="link"><div> Education : </div> <div> PHd in CSE</div></div>
               <div className="link"><div> Branch : </div> <div> BCA ,MCA</div></div>
              
             </div>
        </div>


        <div className="subProfile2">

          <div className="rankings">
            <h4>Rankings</h4>
             <div className="rank"><div>Communication Skills</div> <div> 4 Stars</div></div>
             <div className="rank"><div>Behaviour</div> <div> 2 Stars</div></div>
             <div className="rank"><div>Teaching Style</div> <div> 5 Stars</div></div>
             <div className="rank"><div>Teaching Style</div> <div> 4 Stars</div></div>
             <div className="rank"><div>Teaching Style</div> <div> 3 Stars</div></div>


             <div className="rank" id='final'><div>OverAll Ranking</div> <div> 3.5 Stars</div></div>
             <h2>other questions</h2>
          </div>
            



          <div className="subdata">
              <div className="personaldetail">
                 <img src="https://img.freepik.com/free-vector/flat-timeline-infographic-template_23-2148906597.jpg?size=626&ext=jpg" alt="" />
              </div>
              <div className="graph">
                   <img src="https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-17906.jpg?size=626&ext=jpg" alt="" />
              </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default Teacherprofile