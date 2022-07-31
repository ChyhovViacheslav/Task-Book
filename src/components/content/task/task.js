import { useState, useEffect } from 'react'
import '../../../styles/global.scss'
import { useLocalStorage } from '../../services/services'

export default function TaskList({filterTasks}){
    // const [tasks, changeTasks] = useLocalStorage('tasks', [{text: 'Privet'}, {text: 'Poka'}, {text: 'Zdarova'}, {text: 'Kak dela'}, {text: 'norm'}])
    const [tasks, changeTasks] = useState([{text: 'Privet'}])

    useEffect(() => {
        if(tasks.length > 4){
            document.querySelector('.task__active').style = 'overflow-y: scroll';
            document.querySelectorAll('.task__active-item').forEach(el => {
                el.style = 'margin-right: 8px'
            })
        } else{
            document.querySelector('.task__active').style = 'overflow-y: auto';
            document.querySelectorAll('.task__active-item').forEach(el => {
                el.style = 'margin-right: 0px'
            })
        }
      return () => {
      }
    }, [tasks])

    const deleteTask = (id) => {
        // const index = data.findIndex(elem => elem.id === id)
        //     const before = data.slice(0, index)
        //     const after = data.slice(index + 1)

        //     const newArr = [...before, ...after]

        //     return{
        //         data: newArr
        //     }
    }

    const activeTask = tasks.map(item => {
        const {text} = item
        return (
            <div key={text} className='task__active-item'>
                <input type="checkbox"/>
                <span>{text}</span>
                <button onClick={() => {

                }}></button>
            </div>
        )
    })

    return(
        <div className='task'>
            <div className='task__body'>
                <div className='task__title'>
                    <h1>Активные задачи</h1>
                    <div className='task__dots'>
                        точки
                    </div>
                </div>
                <div className='task__active'>
                    {activeTask}
                </div>
                <div className='task__completed'></div>
            </div>
        </div>
    )
}