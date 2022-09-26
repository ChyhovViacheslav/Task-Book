import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

export default function DotsModal({child, active, someFunc, setActive}){
    return(
        <div className='modal-dots'>
            <button
                className='modal-dots__dots'
                onClick={(e) => {
                    e.preventDefault()
                    setActive(!active)
                }}>
                <FontAwesomeIcon
                    icon={faEllipsis}
                    fontSize='28px'
                    color='#b4b4b4'
                    className={active ? 'modal-dots__ico show' : 'modal-dots__ico'}
                    />
            </button>
        <CSSTransition unmountOnExit in={active} timeout={300} classNames='dot'>
                    <div className='modal-dots__body'>
                        <button 
                            className='modal-dots__btn'
                            onClick={(e) => {
                                e.preventDefault()
                                someFunc()
                        }}>
                            <span>{child}</span>
                        </button>
                    </div>
        </CSSTransition>
            </div>
    )
}