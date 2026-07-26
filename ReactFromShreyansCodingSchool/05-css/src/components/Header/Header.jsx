import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>Piyush Raj</h3>
        <button>Log in</button>
    </div>
  )
}

export default Header