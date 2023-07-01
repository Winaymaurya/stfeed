import React from 'react'
import Teacher from '../component/layout/Teacher'
import teacherApi from '../teacherapi'
import './SelcetTeacher.css'

const SelectTeacher = (props) => {
    const [menuData,setMenuData] = React.useState(teacherApi)

    const filteritem=(e,cat)=>{
      e.preventDefault()
      const updatelist=teacherApi.filter((curElement)=>{
        return curElement.branch===cat;
      })
      setMenuData(updatelist)
    }
  return (<>

<nav className="navbar">
                <ul>
                    <li>
                        <a href="" onClick={(e)=>filteritem(e,"BCA")}>BCA</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>filteritem(e,"MCA")}>MCA</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>filteritem(e,"Btech")}>Btech</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>filteritem(e,"Mtech")}>Mtech</a>
                    </li>
                    <li>
                      <a href="">All</a>
                    </li>
                   
                </ul>
        
            </nav>
     <div className="teacherCont">
      
      <Teacher menuData={menuData}/>
      </div>  
    </>
  )
}

export default SelectTeacher