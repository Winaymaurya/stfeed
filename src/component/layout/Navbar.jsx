import React from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  return (
    <>
    <details>
  <summary></summary>
  <nav class="menu">
    <AnchorLink href="#home">Home</AnchorLink>
    <AnchorLink href="#about">About</AnchorLink>
    {/* <a href="#link">Work</a> */}
    <AnchorLink href="#link">Links</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </nav>
</details>
    </>
  )
}

export default Navbar
