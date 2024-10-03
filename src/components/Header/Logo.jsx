import styles from './Header.module.css'

function Logo ({foto, nome}) {
    return (
        <>
            <img src= {foto} alt = {nome} className={styles.logo}/>
        </>
    )
}

export default Logo;