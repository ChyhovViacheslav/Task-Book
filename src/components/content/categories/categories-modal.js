import { useContext, useRef } from 'react'
import '../../../styles/global.scss'
import { ThemeContext } from '../../theme/ThemeProvider'

export default function CategoriesModal({icoBodyRef, categories, currentIco, icoContent, input, active, setActive, changeInput, addCategories}){
    const inputRef = useRef()
    const warningRef = useRef()  
    const {type} = useContext(ThemeContext)

    const setDefault = () => {
        inputRef.current.value = ''
        inputRef.current.style.border = '1px solid rgba(40, 40, 70, 0.1)'
        warningRef.current.style.opacity = '0'
        setActive(false)
    }

    return(
        <div className={active ? 'modal active-mod':'modal'} onClick={() => setDefault()}>
            <div className={type ? 'modal__body' : 'modal__body dark'} onClick={e => e.stopPropagation()}>
                <form className={type ? 'modal__form' : 'modal__form dark'} id='1'>
                    <h4>Добавить новую категорию</h4>
                    <div className='modal__inputs'>
                        <div className='modal__text'>
                            <p>Название категории:</p>
                            <input
                                ref={inputRef} 
                                className={type ? 'modal__text-input' : 'modal__text-input dark'}
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
                            <p ref={warningRef} className='warning'>
                                Слишком длинное название категории
                            </p>
                        </div>
                        <div className='modal__ico'>
                            <p>Иконка категории:</p>
                            <div ref={icoBodyRef} className='modal__ico-body'>{icoContent}</div>
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

                                const names = (el) => el.name === input

                                const redBorder = () => inputRef.current.style.border = '1px solid #F05454'
                                if(input.length === 0){
                                    redBorder()
                                }else if(currentIco === null){
                                    icoBodyRef.current.style.outline = '1px solid #F05454'
                                } else if(input.length >= 12){
                                    redBorder()
                                } else if(categories.some(names)){
                                    redBorder()
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