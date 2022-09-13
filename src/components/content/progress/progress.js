import '../../../styles/global.scss';
import { useEffect, useRef, useState } from 'react'
import DotsModal from '../../interface/dots/dots'
import Block from '../../interface/block/block';

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
            setInterval(() => {
                refreshCounter()
            }, 6.048e+8)
        }
        return () => {
            isPause.current = true
        }
    })

    return(
        <Block 
            className={'progress'} 
            title={'Ваши успехи за неделю'} 
            dots={<DotsModal
                child={'Сбросить прогресс'}
                active={active}
                setActive={setActive}
                someFunc={refreshCounter}/>}
        >
            <div className='progress__items'>
                <div className='progress__item'>
                    <h5><span>Создано</span></h5>
                    <div className='progress__item-count'>
                        <span>{createdTask}</span>
                        <p>задач</p>
                    </div>
                </div>
                <div className='progress__item'>
                    <h5><span>Завершено</span></h5>
                    <div className='progress__item-count'>
                         <span>{complitedTask}</span>
                        <p>задач</p>
                    </div>
                </div>
                <div className='progress__item'>
                    <h5><span>Удалено</span></h5>
                    <div className='progress__item-count'>
                        <span>{deletedTask}</span>
                        <p>задач</p>
                    </div>
                </div>
            </div>
        </Block>
    )
}