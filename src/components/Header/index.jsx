import styles from './Header.module.css'
import Logo from './Logo.jsx'
import LogoImage from '../../assets/LogoInterConex.png'
import { faBars, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Header() {
    return (    
        <header className={styles.headerContainer}>

        <div className={styles.headerLeft}>
          <FontAwesomeIcon icon={faBars} className={styles.iconButton} /> 
          <Logo foto={LogoImage}/>
        </div>

        <div className={styles.header}>
          <form className={styles.Pesquisa} action=""></form>
        </div>

        <div className={styles.headerRight}> 
          <FontAwesomeIcon icon={faBoxArchive} className={styles.iconButton}/>
          <FontAwesomeIcon icon={faUser} className={styles.iconButton} />
        </div>
      </header>
    )
}

export default Header;