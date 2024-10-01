import styles from './Header.module.css'
import Logo from './Logo.js'
import LogoImage from '../../assets/LogoInterConex.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (    
        <header className={styles.headerContainer}>

        <div className={styles.headerLeft}>
            <FontAwesomeIcon icon={faBars} className='fonte' /> 
            <Logo foto={LogoImage}/>
        </div>
        <div className={styles.headerRight}> 
          <button className={styles.iconButton}>🔔</button>
          <button className={styles.iconButton}>💬</button>
          <button className={styles.iconButton}>👤</button>
        </div>
      </header>
    )
}

export default Header;