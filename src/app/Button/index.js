
import styles from './Button.module.css'

export const Button = ({children,onClick,theme}) => {

    return(
        <button className={theme ? styles.buttonBlueGreen : styles.buttonRed} onClick={onClick} >
            {children}
        </button>
    )
}

