import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { Context } from './context'

const Navbar = () => {
  const { 
    openSidebar, 
    findSublink,
    resetSubmenu 
  } = useContext(Context)

  const allLinks = sublinks.map(link => (
    <li key={ link.page } 
      onMouseEnter={ (e) => findSublink(link.page, e) }
      onMouseLeave={ resetSubmenu }
    >
      <button className="link-btn">{ link.page }</button>
    </li>
  ))
  
  return (
    <nav className="nav">
      <div className="nav-center">

        <div className="nav-header">
          <img src={logo} alt="stripe"/>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {allLinks}
        </ul>

        <button className="signin-btn btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
