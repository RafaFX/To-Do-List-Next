'use client'
import styles from './page.module.css'
import { memo, useCallback, useState } from 'react';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Form } from './Form';
import  Task  from './Task';


const MemoFooter = memo(Footer)
const MemoBanner = memo(Banner)

export default function Home() {

  const [tasks, setTasks] = useState<{id:string,name:string,description:string,date:string}[]>([])
  const [theme, setTheme] = useState(true)

  const onDelete = (id:string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <main className={styles.App}>
      <MemoBanner theme={theme} setState={setTheme} />
      <Form theme={theme} tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 && <h1 className={ theme ? styles.tasksTitleBlueGreen : styles.tasksTitleRed } >Tasks</h1>}
      <section className={styles.tasksBoxes} >
      {tasks.map((task) => {
        return (
          <Task theme={theme} key={task.id} task={task} onDelete={onDelete} id={task.id} />
        )
      })}
      </section>
      <MemoFooter  theme={theme} />
    </main>
  )
}
