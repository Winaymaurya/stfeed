import React from 'react'
import './button.css'
export const Button = (props) => {
  return (
     <>
    <button className="button" ><span>{props.btnName}</span></button>
          
     </>
    )
}
