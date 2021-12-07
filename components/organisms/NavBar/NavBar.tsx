import type { FC } from 'react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import styles from "./NavBar.module.css"
import { FiBell } from "react-icons/fi";
const NavBar: FC = ({children}) => {
  return (
    <div className={styles.navBar}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            progressed
          </h2>
        </div>
        <div id="profileSection" className={styles.profileSection}>
          <div id="accountLinkContainer">
            <button type="button" className="btn btn-light">
              My Account
            </button>
          </div>
        </div>
    </div>
  )
}

export default NavBar
