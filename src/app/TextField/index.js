import styles from  './TextField.module.css'

export const TextField = ({title}) => {

    return(
        <div className={styles.input}>
        <label>{title}</label>
        <input  type='text' name={title} required />
        </div>
    )
}

