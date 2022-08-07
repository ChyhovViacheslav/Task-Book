import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './progress/progress'
import '../../styles/global.scss'
import TaskList from './task/task'
import { useState } from 'react'
import TaskModal from './taskmodal'
import { useLocalStorage } from '../services/services'
import Timer from './timer/timer'
import Remark from './remark/remark'
import Facts from './facts/facts'
import Chart from './chart/chart'

export default function Content({target}){
    const [active, setActive] = useState(false)
    let [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useLocalStorage('tasks', [])
    const [createdTask, incTask] = useLocalStorage('createdTask', 0)
    const [deletedTask, decTask] = useLocalStorage('deletedTask', 0)
    const [complitedTask, countTask] = useLocalStorage('complitedTask', 0)

    const addTask = () => {
        const id = Math.floor(Math.random() * 99999999999999)
        if(task.length > 49){
            task = `${task.slice(0, 50)}...`
        }

        const newArr = {id: id, category: category, task: task, complited: false}

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
                    <ProgressBar
                        complitedTask={complitedTask}
                        newTask={newTask}
                        createdTask={createdTask}
                        deletedTask={deletedTask}/>
                    <TaskList
                        complitedTaskN={complitedTask}
                        countTask={countTask}
                        deletedTask={deletedTask}
                        decTask={decTask}
                        target={target}
                        newTask={newTask}
                        setNewTask={setNewTask}/>
                </div>
                <div className='content__inf'>
                    <Timer/>
                    <Remark/>
                    <Facts/>
                    <Chart/>
                </div>
            </div>
            <TaskModal
                createdTask={createdTask}
                incTask={incTask}
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