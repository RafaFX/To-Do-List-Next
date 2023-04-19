import styles from './Task.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { memo } from 'react'


const Task = ({ task/* : { name, description, date } */, onDelete, id, theme }) => {
    const name = task.name
    const description = task.description
    const date = task.date

    console.log(date)

    return (
        <div className={styles.taskBox} >
            <AiFillCloseCircle key={name} size={20} className={styles.buttonClose} onClick={() => onDelete(id)} />
            <div className={theme ? styles.taskHeaderBlueGreen : styles.taskHeaderRed} >
                <h1>{name}</h1>
            </div>
            <div className={styles.taskFooter} >
                <p>Description: {description}</p>
                <p>Deadline: {date.toLocaleString('pt-BR', { day: "numeric", month: "long", hour: "numeric", minute: "numeric" })}</p>
            </div>
        </div>
    )
}

export default memo(Task);