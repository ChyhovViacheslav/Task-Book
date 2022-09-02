import { useRef, useState } from 'react'
import '../../../styles/global.scss'
import DotsModal from '../../interface/dots/dots'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { checkboxClasses } from '@mui/material'

export default function TaskList({ newTask, target, setNewTask, decTask, deletedTask, complitedTaskN, countTask }) {
    const [active, setActive] = useState(false)
    const refEdit = useRef([])
    const refCheckbox = useRef([])

    const emptyTask = newTask.filter(item => {
        if (item.category === target) {
            return item.complited === false
        } else {
            return null
        }
    })

    const emptyComplitedTask = newTask.filter(item => {
        if (item.category === target) {
            return item.complited === true
        } else {
            return null
        }
    })

    const clearTasks = () => {
        const changedTasks = newTask.filter(item => {
            return item.category !== target
        })
        setNewTask(changedTasks)
    }

    return (
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
                    {emptyTask.length > 0 ? (
                        <TransitionGroup className='task__group'>
                            {newTask.map((item, index) => {
                                const { category, task, complited, id } = item
                                if (target === category && !complited) {
                                    return (
                                        <CSSTransition
                                            classNames='item'
                                            key={id}
                                            timeout={300}>
                                            <div key={id} className='task__active-item'>
                                                <input
                                                    className='task__input'
                                                    type="checkbox"
                                                    checked={false}
                                                    ref={el => refCheckbox.current[index] = el}
                                                    onChange={() => {
                                                        const changedTask = newTask.map((item) => {
                                                            return item.id === id ? { ...item, complited: !complited } : item
                                                        })
                                                        countTask(++complitedTaskN)
                                                        setNewTask(changedTask)
                                                    }} />
                                                <span
                                                    className='task__text-content'
                                                    ref={el => refEdit.current[index] = el}
                                                    onChange={() => {
                                                        console.log('Прифки')
                                                    }}>
                                                        {task}
                                                </span>
                                                <button className='task__edit'
                                                    onClick={() => {
                                                        const currentTask = refEdit.current[index]
                                                        const currentCheckbox = refCheckbox.current[index]
                                                        if(currentTask.classList.contains('active')){

                                                            const editedTask = newTask.filter((el, i) => {
                                                                if(index === i){
                                                                    return el.task = currentTask.textContent
                                                                }
                                                            })

                                                            if(!editedTask[0]){
                                                                currentTask.classList.add('warn')
                                                                currentTask.focus()
                                                            }else if(editedTask[0].task.length >= 50){
                                                                currentTask.classList.add('warn')
                                                                currentTask.focus()
                                                            }else {
                                                                const editedArr = newTask.map(el => {
                                                                    if(el.id === editedTask[0].id){
                                                                        el = editedTask[0]
                                                                    }
                                                                    return el
                                                                }) 
                                                                setNewTask(editedArr)
                                                                currentTask.contentEditable = false
                                                                currentTask.classList.remove('warn')
                                                                currentTask.classList.remove('active')
                                                                currentCheckbox.classList.remove('inactive')
                                                            }
                                                        }else {
                                                            currentTask.contentEditable = true
                                                            currentTask.focus()
                                                            currentTask.classList.add('active')
                                                            currentCheckbox.classList.add('inactive')
                                                        }
                                                    }} />
                                                <button className='task__trash'
                                                    onClick={() => {
                                                        const changedTask = newTask.filter((item) => {
                                                            return item.id !== id
                                                        })
                                                        setNewTask(changedTask)
                                                        decTask(++deletedTask)
                                                    }} />
                                            </div>
                                        </CSSTransition>
                                    )
                                }
                            })}
                        </TransitionGroup>
                    ) : (
                        <CSSTransition classNames='block' timeout={300}>
                            <div className='task__active-empty empty'>
                                <span>Нет активных задач</span>
                            </div>
                        </CSSTransition>
                    )}
                </div>
                <div className='task__complited-title'>
                    <h1>Завершенные задачи</h1>
                </div>
                <div className='task__completed'>
                    {emptyComplitedTask.length > 0 ? (
                        <TransitionGroup>
                            {newTask.map((item) => {
                                const { category, task, complited, id } = item
                                if (target === category && complited) {
                                    return (
                                        <CSSTransition
                                            classNames='item'
                                            key={id}
                                            timeout={300}>
                                            <div className='task__active-item'>
                                                <input
                                                    className='task__input'
                                                    type="checkbox"
                                                    checked={true}
                                                    onChange={() => {
                                                        const changedTask = newTask.map((item) => {
                                                            return item.id === id ? { ...item, complited: !complited } : item
                                                        })
                                                        countTask(--complitedTaskN)
                                                        setNewTask(changedTask)
                                                    }} />
                                                <span className='task__text-content' style={{ textDecoration: 'line-through' }}>{task}</span>
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
                                        </CSSTransition>
                                    )
                                }
                            })}
                        </TransitionGroup>
                    ) : (
                        <div className='task__complited-empty empty'>
                            <span>Нет завершённых задач</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}