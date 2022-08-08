import { useState } from 'react'
import '../../../styles/global.scss'
import DotsModal from '../../interface/dots/dots'

export default function TaskList({newTask, target, setNewTask, decTask, deletedTask, complitedTaskN, countTask}){
    const [active, setActive] = useState(false)

    const activeTask = newTask.map((item) => {
        const {category, task, complited, id} = item
        if(target === category && !complited){
            return(
                <div key={id} className='task__active-item'>
                    <input 
                        className='task__input' 
                        type="checkbox"
                        checked={false}
                        onChange={() => {
                            const changedTask = newTask.map((item) => {
                                return item.id === id ? {...item, complited: !complited} : item
                            })
                            countTask(++complitedTaskN)
                            setNewTask(changedTask)
                        }}/>
                    <span>{task}</span>
                    <button className='task__trash' onClick={() => {
                        const changedTask = newTask.filter((item) => {
                            return item.id !== id
                        })
                        setNewTask(changedTask)
                        decTask(++deletedTask)
                    }}>
                    </button>
                </div>
            )
        }
    })

    const complitedTask = newTask.map((item) => {
        const {category, task, complited, id} = item
        if(target === category && complited){
            return(
                <div key={id} className='task__active-item'>
                    <input 
                        className='task__input' 
                        type="checkbox"
                        checked={true}
                        onChange={() => {
                            const changedTask = newTask.map((item) => {
                                return item.id === id ? {...item, complited: !complited} : item
                            })
                            countTask(--complitedTaskN)
                            setNewTask(changedTask)
                        }}/>
                    <span style={{textDecoration: 'line-through'}}>{task}</span>
                    <button className='task__trash' onClick={() => {
                        const changedTask = newTask.filter((item) => {
                            return item.id !== id
                        })
                        setNewTask(changedTask)
                        decTask(++deletedTask)
                        countTask(--complitedTaskN)
                    }}>
                    </button>
                </div>
            )
        }
    })

    const emptyTask = newTask.filter(item => {
        if(item.category === target){
            return item.complited === false
        }
    })

    const emptyComplitedTask = newTask.filter(item => {
        if(item.category === target){
            return item.complited === true
        }
    })

    const clearTasks = () => {
        //Удаляет ВСЕ задачи со ВСЕХ категорий
        const changedTasks = newTask.filter(item => {
            if(item.category === target){
                return item.category !== target
            }
        })
        setNewTask(changedTasks)
    }

    return(
        <div className='task'>
            <div className='task__body'>
                <div className='task__title'>
                    <h1>Активные задачи</h1>
                    <DotsModal
                        active={active}
                        setActive={setActive}
                        child={'Очистить категорию'}
                        someFunc={clearTasks}
                        />
                </div>
                <div className='task__active'>
                    {emptyTask.length > 0 ? activeTask : 
                    <div className='task__active-empty empty'>
                        <span>Нет активных задач</span>
                    </div>}
                </div>
                <div className='task__complited-title'>
                    <h1>Завершенные задачи</h1>
                </div>
                <div className='task__completed'>
                    {emptyComplitedTask.length > 0 ? complitedTask :
                    <div className='task__complited-empty empty'>
                        <span>Нет завершённых задач</span>    
                    </div>}
                </div>
            </div>
        </div>
    )
}