import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './progress/progress'
import '../../styles/global.scss'
import TaskList from './task/task'
import { useState, useRef, useEffect } from 'react'
import TaskModal from './taskmodal'
import { useLocalStorage } from '../services/services'

export default function Content(){
    const [active, setActive] = useState(false)
    let [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useLocalStorage('tasks', [{category: 'Дом', task: 'Приготовить ужин'}])
    const [tabs, changeTabs] = useState([])

    const addTask = () => {
        if(task.length > 49){
            task = `${task.slice(0, 50)}...`
        }

        const newArr = {category: category, task: task}

        setNewTask([...newTask, newArr])
    }

    return(
        <section className="content">
            <div className='content__body'>
                <div className='content__header'>
                    <button className="content__btn" onClick={() => {
                        setActive(true)
                    }}>
                        <FontAwesomeIcon className='content__btn-ico' icon={faCirclePlus}/>
                        <span>Новая задача</span>
                    </button>
                    <div className='content__user'>
                        <h3>Хорошего дня, username</h3>
                        <div className='content__user-ico'>
                            
                        </div>
                    </div>
                </div>
                <div className='content__tasks'>
                    <ProgressBar/>
                    <TaskList
                        newTask={newTask}/>
                </div>
                <div className='content__inf'>

                </div>
            </div>
            <TaskModal
                addTask={addTask}
                task={task}
                category={category}
                setTask={setTask}
                setCategory={setCategory}
                setNewTask={setNewTask} 
                active={active}
                setActive={setActive}
            />
        </section>
    )
}