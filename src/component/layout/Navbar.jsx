import React from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  return (
    <>
    <details>
  <summary></summary>
  <div className="menu">
    <AnchorLink href="#home">Home</AnchorLink>
    <AnchorLink href="#about">About</AnchorLink>
    {/* <a href="#link">Work</a> */}
    <AnchorLink href="#contact">Contact</AnchorLink>
    <AnchorLink href="#link">Links</AnchorLink>
  </div>
</details>
    </>
  )
}

export default Navbar
