import { useRef, useState } from 'react'
import '../../../styles/global.scss'
import DotsModal from '../../interface/dots/dots'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function TaskList({ newTask, target, setNewTask, decTask, deletedTask, complitedTaskN, countTask }) {
    const [active, setActive] = useState(false)
    const refEdit = useRef([])

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
        //Удаляет ВСЕ задачи со ВСЕХ категорий
        const changedTasks = newTask.filter(item => {
            if (item.category === target) {
                return item.category !== target
            } else {
                return null
            }
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
                                                    onChange={() => {
                                                        const changedTask = newTask.map((item) => {
                                                            return item.id === id ? { ...item, complited: !complited } : item
                                                        })
                                                        countTask(++complitedTaskN)
                                                        setNewTask(changedTask)
                                                    }} />
                                                <span 
                                                    className='task__text-content'
                                                    ref={el => refEdit.current[index] = el}>
                                                    {task}
                                                </span>
                                                <button className='task__edit'
                                                    onClick={() => {
                                                        const currentTask = refEdit.current[index]
                                                        if(currentTask.classList.contains('active')){
                                                            currentTask.contentEditable = false
                                                            currentTask.classList.toggle('active')

                                                            const editedTask = newTask.filter((el, i) => {
                                                                if(index === i){
                                                                    return el.task = currentTask.textContent
                                                                }
                                                            })

                                                            if(!editedTask[0]){
                                                                console.log('Пустое поле')
                                                            }else if(editedTask[0].length >= 50){
                                                                console.log('Слишком длинное поле')
                                                            }else {
                                                                const editedArr = newTask.map(el => {
                                                                    if(el.id === editedTask[0].id){
                                                                        el = editedTask[0]
                                                                    }
                                                                    return el
                                                                }) 
                                                                setNewTask(editedArr)
                                                            }
                                                        }else {
                                                            currentTask.contentEditable = true
                                                            currentTask.focus()
                                                            currentTask.classList.toggle('active')
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
                                                <span style={{ textDecoration: 'line-through' }}>{task}</span>
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