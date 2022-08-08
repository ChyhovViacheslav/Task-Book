import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"

export default function DotsModal({child, active, someFunc, setActive}){
    return(
        <>
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
        <div className={!active ? 'modal-dots' : 'modal-dots active'}>
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
            </div>
            </>
    )
}