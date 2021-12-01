import type {FC} from 'react'
import styles from './Dropdown.module.css'

const Dropdown: FC = () => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropBtn}>Dropdown</button>
            <div className={styles.dropdownContent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default Dropdown