import React from "react";
import styles from "./Header.module.css";
import {BsSun, BsSunFill} from 'react-icons/bs';
import { useDarkMode } from "../../context/DarkModeContext";

function Header({filters, filter, onFilterChange}) {

  const {darkMode, toggleDarkMode} = useDarkMode();

  // const handelDarkMode = () => toggleDarkMode;
  return (
    <header className={styles.header}>
      <button className={styles.icon} onClick={toggleDarkMode}>{darkMode ? <BsSun /> : <BsSunFill />}</button>
      <ul className={styles.filters}>
        {filters.map((item, index) => 
          <li key={index}><button className={`${styles.filter} ${filter === item && styles.selected}`} onClick={() => onFilterChange(item)}>{item}</button></li>
        )}
      </ul>
    </header>
  );
}
export default Header;
