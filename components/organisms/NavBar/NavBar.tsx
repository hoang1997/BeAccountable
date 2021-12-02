import type { FC } from 'react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import styles from "./NavBar.module.css"

const NavBar: FC = ({children}) => {
  return (
    <div className={styles.navBar}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            BeAccountable
          </h2>
        </div>
        <div id="profileSection" className={styles.profileSection}>
          <div id="notification">
          </div>
          <div className={styles.profile}>
            <span className={styles.profileName}>JH</span>
          </div>
        </div>
    </div>
  )
}

export default NavBar
