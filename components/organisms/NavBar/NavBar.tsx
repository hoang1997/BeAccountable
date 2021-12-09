import type { FC } from 'react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import styles from "./NavBar.module.css"
import { FiBell } from "react-icons/fi";
const NavBar: FC = ({children}) => {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-start">
      <div className="container">
      <a className="navbar-brand  d-inline" href="">social progress.</a>
      <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
          <ul className="navbar-nav mx-auto text-md-center text-left">
              <li className="nav-item">
                  <a className="nav-link" href="#">Activity Feed</a>
              </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
              <li className="nav-item"><a className="nav-link" href=""><i><FiBell/></i></a> </li>
              <li className="nav-item"><a className="nav-link" href="profile/1">My account</a> </li>
          </ul>
      </div>
      </div>
    </nav>
  )
}

export default NavBar
