import { useRef } from 'react'
import '../../../styles/global.scss'

export default function CategoriesModal({currentIco, icoContent, input, active, setActive, changeInput, addCategories}){
    const inputRef = useRef()
    const warningRef = useRef()
    const icoBodyRef = useRef()

    const setDefault = () => {
        inputs.value = ''
        inputs.style.border = '1px solid rgba(40, 40, 70, 0.1)'
        document.querySelector('.warning').style.opacity = '0'
        setActive(false)
    }

    const inputs = document.querySelector('input')

    return(
        <div className={active ? 'modal active':'modal'} onClick={() => setDefault()}>
            <div className='modal__body' onClick={e => e.stopPropagation()}>
                <form className='modal__form' id='1'>
                    <h4>Добавить новую категорию</h4>
                    <div className='modal__inputs'>
                        <div className='modal__text'>
                            <p>Название категории:</p>
                            <input
                                ref={inputRef} 
                                className='cat-input'
                                onChange={e =>{ 
                                    changeInput(e.target.value)
                                    if(e.target.value.length >= 12){
                                        e.target.style.border = '1px solid red'
                                        warningRef.current.style.opacity = '1'
                                    } else{
                                        e.target.style.border = '1px solid rgba(40, 40, 70, 0.1)'
                                        warningRef.current.style.opacity = '0'
                                    }
                                }} 
                                placeholder='Введите название категории'
                            />
                            <p ref={warningRef} className='warning'>Слишком длинное название категории</p>
                        </div>
                        <div className='modal__ico'>
                            <p>Иконка категории:</p>
                            <div ref={icoBodyRef} className='modal__ico-body'>
                                {icoContent}
                            </div>
                        </div>
                    </div>
                    <div className='modal__btns'>
                        <button 
                            onClick={e => {
                                e.preventDefault()
                                setDefault()
                            }} 
                            className='modal__btn-cnsl'>Отменить</button>
                        <button
                            onClick={e => {
                                e.preventDefault()
                                if(input.length === 0){
                                    inputRef.current.style.border = '1px solid #F05454'
                                }else if(currentIco === null){
                                    icoBodyRef.current.style.border = '1px solid #F05454'
                                } else if(input.length >= 12){
                                    console.log('Слишком длинное название категории')
                                } else {
                                    addCategories()
                                    setDefault()
                                }
                            }} 
                            className='modal__btn-sbmt'>Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}