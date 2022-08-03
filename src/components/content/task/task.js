import { useEffect, useState } from 'react'
import '../../../styles/global.scss'

export default function TaskList({newTask}){
    useEffect(() => {
        if(newTask.length > 4){
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
    }, [newTask])

    const showTask = newTask.map(item => {
        const {category, task} = item
        if('Работа' === category){
            return(
                <div key={task} className='task__active-item'>
                    <input type="checkbox"/>
                    <span>{task}</span>
                    <button onClick={() => {

                    }}></button>
                </div>
            )
        }
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
                    {showTask}
                </div>
                <div className='task__completed'></div>
            </div>
        </div>
    )
}