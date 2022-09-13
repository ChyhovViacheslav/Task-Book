import '../../styles/global.scss'

import ProgressBar from './progress/progress'
import TaskList from './task/task'
import { useState, useEffect, useContext } from 'react'
import TaskModal from './taskmodal/taskmodal'
import { useLocalStorage } from '../services/services'
import Timer from './timer/timer'
import Remark from './remark/remark'
import Facts from './facts/facts'
import Chart from './chart/chart'
import { ThemeContext } from '../theme/ThemeProvider'
import { IconSelector } from '../../assets/icons/icons'

export default function Content({target, setTarget, categories, changeCategories, toggleTarget}){
    const [active, setActive] = useState(false)
    let [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useLocalStorage('tasks', [])
    const [createdTask, incTask] = useLocalStorage('createdTask', 0)
    const [deletedTask, decTask] = useLocalStorage('deletedTask', 0)
    const [complitedTask, countTask] = useLocalStorage('complitedTask', 0)
    const {type, setType} = useContext(ThemeContext)

    useEffect(() => {
        
    }, [categories.length])



    const addTask = (time) => {
        const id = Math.floor(Math.random() * 99999999999999)
        if(task.length > 49){
            task = `${task.slice(0, 50)}...`
        }

        const newArr = {
            id: id, 
            category: category, 
            task: task, 
            complited: false, 
            time: `${time}`, 
            created: Date(Date.now()).slice(0, 3)}

        setNewTask([...newTask, newArr])
    }

    return(
        <section className="content">
            <div className='content__container _container'>
                <div className='content__body'>
                    <div className='content__header'>
                        <button className="content__btn" onClick={() => {
                            setActive(true)
                        }}>
                            <IconSelector id={'circle-plus'}/>
                            <span>Новая задача</span>
                        </button>
                        <button 
                            className='content__mode'
                            onClick={() => {
                                setType(!type)
                            }}>
                            <IconSelector id={type ? 'moon' : 'sun'}/>
                        </button>
                        <div className='content__user'>
                            <h3>Хорошего дня, username</h3>
                            <div className='content__user-ico'>
                                
                            </div>
                        </div>
                    </div>
                   <div className='content__content'>
                        <div className='content__tasks'>
                            <ProgressBar
                                complitedTask={complitedTask}
                                newTask={newTask}
                                createdTask={createdTask}
                                deletedTask={deletedTask}
                                incTask={incTask}
                                decTask={decTask}
                                countTask={countTask}/>
                            <TaskList
                                categories={categories}
                                complitedTaskN={complitedTask}
                                countTask={countTask}
                                deletedTask={deletedTask}
                                decTask={decTask}
                                target={target}
                                newTask={newTask}
                                setNewTask={setNewTask}/>
                            <button 
                                className='content__delete-btn'
                                onClick={() => {
                                    const categoryNames = categories.map(el => {
                                        return el.name
                                    })
                                    
                                    const categoryIndex = categoryNames.findIndex(i => i == target) - 1

                                    setNewTask(newTask.filter(item => {
                                        return item.category !== target
                                    }))
                                    changeCategories(categories.filter(item => {
                                        return item.name !== target
                                    }))
                                    setTarget(categories[categoryIndex].name)
                                    toggleTarget(categoryIndex)
                                }}>
                                <span>Удалить категорию {target}</span>
                            </button>
                        </div>
                        <div className='content__inf'>
                            <Timer/>
                            <Remark
                                newTask={newTask}/>
                            <Facts/>
                            <Chart
                                newTask={newTask}/>
                        </div>
                   </div>
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
                categories={categories}
            />
        </section>
    )
}