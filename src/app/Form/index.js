
import { Button } from '../Button'
import { TextField } from '../TextField'
import { InputDate } from '../InputDate'
import styles from './Form.module.css'


const Form = ({tasks,setTasks,theme}) => {
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const id = window.crypto.randomUUID();
        const name = formData.get('Task')
        const description = formData.get('Description')
        const date = formData.get('Date')

        const convertedDate = new Date(date)
    
        setTasks([...tasks, { id, name, description, date:convertedDate }])
        
        e.target.elements.namedItem('Task').value = ''
        e.target.elements.namedItem('Description').value = ''
    }

    return (
        <section className={styles.form} >
            <form onSubmit={onSubmit} >
                <TextField title='Task'  />
                <TextField title='Description' />
                <InputDate title='Date' />
                <Button theme={theme} >
                    Criar Task
                </Button>
            </form>
        </section>
    )
}

export { Form }