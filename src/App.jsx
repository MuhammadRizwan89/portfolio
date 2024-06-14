import React from 'react'
import { NavLink} from 'react-router-dom'


const App = () => {
  return (
    <>
    <header>
      <a href="#">LOGO</a>
      <nav>
        <ul>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Service">Service</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
  )
}

export default App