import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import '../../../styles/global.scss'
import DotsModal from '../../interface/dots/dots'

export default function ProgressBar({createdTask, deletedTask, complitedTask, incTask, decTask, countTask}){
    const [active, setActive] = useState(false)
    const isPause = useRef(false)

    const refreshCounter = () => {
        incTask(0)
        decTask(0)
        countTask(0)
    }

    useEffect(() => {
        isPause.current = false
        if(!isPause){
            const interval = setInterval(() => {
                refreshCounter()
            }, 6.048e+8)
        }
        return () => {
            isPause.current = true
        }
    })

    return(
        <div className='progress'>
            <div className='progress__body'>
                <div className='progress__title'>
                    <h1>Ваши успехи за неделю</h1>
                    <DotsModal
                        child={'Сбросить прогресс'}
                        active={active}
                        setActive={setActive}
                        someFunc={refreshCounter}/>
                </div>
                <div className='progress__items'>
                    <div className='progress__item'>
                        <h5>Создано</h5>
                        <div className='progress__item-count'>
                            <span>{createdTask}</span>
                            <p>задач</p>
                        </div>
                    </div>
                    <div className='progress__item'>
                        <h5>Завершено</h5>
                        <div className='progress__item-count'>
                            <span>{complitedTask}</span>
                            <p>задач</p>
                        </div>
                    </div>
                    <div className='progress__item'>
                        <h5>Удалено</h5>
                        <div className='progress__item-count'>
                            <span>{deletedTask}</span>
                            <p>задач</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}