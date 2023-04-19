import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from './Footer.module.css'

export const Footer = ({theme}) => {

    return(
        <footer className={theme ? styles.footerBlueGreen : styles.footerRed} >
                <div className={styles.socialMedia}>
                    <a href='https://github.com/RafaFX' target='blank' ><AiFillGithub /></a> 
                    <a href='https://www.linkedin.com/in/rafael-lima-aba771208/' target='blank' ><AiFillLinkedin /></a>
                </div>

                <div className={styles.logoFooter} >
                    <img src={theme ? '/images/logo-blue-green.png' : '/images/logo-red.png' } alt='Organo Logo' />
                </div>

                <div className={styles.developer} >
                    <label>Desenvolvido por Rafael</label>
                </div>
        </footer>
    )

}

