import styles from './InputDate.module.css'

export const InputDate = ({title}) => {

    return(
        <div className={styles.date}>
        <label>{title}</label>
        <input  type='datetime-local' name={title} required />
        </div>
    )
}