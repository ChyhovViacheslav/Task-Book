import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './progress/progress'
import '../../styles/global.scss'
import TaskList from './task/task'
import { useState } from 'react'
import TaskModal from './taskmodal'

export default function Content(){
    const [active, setActive] = useState(false)
    const [tabs, changeTabs] = useState([])

    const filterTasks = (tasks) => {
        tasks.map(item => {
            const {text} = item
            return (
                <div key={text} className='task__active-item'>
                    <input type="checkbox"/>
                    <span>{text}</span>
                    <button onClick={() => {

                    }}>
                    </button>
                </div>
            )
        })
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
                    <TaskList filterTasks={filterTasks}/>
                </div>
                <div className='content__inf'>

                </div>
            </div>
            <TaskModal 
                active={active}
                setActive={setActive}/>
        </section>
    )
}