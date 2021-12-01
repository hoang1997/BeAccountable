import type { FC } from 'react'
import Header from '../../organisms/Header/Header'
import Footer from '../../organisms/Footer/Footer'
import NavBar from "../../organisms/NavBar/NavBar"
import styles from "./Layout.module.css"

const Layout: FC = ({children}) => {
  return (
    <div >
      <Header/>
      <main >
        <NavBar/>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
