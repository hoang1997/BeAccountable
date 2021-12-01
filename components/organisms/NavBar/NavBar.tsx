import type { FC } from 'react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import styles from "./NavBar.module.css"

const NavBar: FC = ({children}) => {
  return (
    <div className={styles.navBar}>
        <div>
        </div>
        <div id="profileSection" className={styles.profileSection}>
          <div id="notification">
          </div>
        </div>
    </div>
  )
}

export default NavBar
