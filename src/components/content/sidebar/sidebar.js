import '../../../styles/global.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useContext } from 'react'
import CategoriesModal from "../categories/categories-modal"
import { ThemeContext } from '../../theme/ThemeProvider'

import home from '../../../assets/icons/home.svg'
import zap from '../../../assets/icons/zap.svg'
import briefcase from '../../../assets/icons/briefcase.svg'
import users from '../../../assets/icons/users.svg'
import { IconSelector } from '../../../assets/icons/icons'

export default function Sidebar({setTarget, categories, changeCategories, toggleTarget}){
    const [modalActive, setModalActive] = useState(false)
    const [icons, setIcons] = useState([home, zap, briefcase, users])
    const [currentIco, setCurrentIco] = useState(null)
    const [input, changeInput] = useState('')
    const ref = useRef([])
    const {type} = useContext(ThemeContext)

    const addCategories = () => {
        const id = Math.floor(Math.random() * 99999999999999)

        const newArr = {id: id, icon: currentIco, name: input}

        const names = (el) => el.name === newArr.name;

        if(categories.length >= 10){
            console.log("Слишком много категорий")
        } else if (categories.some(names)){
            console.log('Повтор названия')
        } else{
            changeCategories([...categories, newArr])
        }
    }

    const icoContent = icons.map((item, index) => {
        return (
            <label key={index} className='modal__ico-content'>
                <input
                    onClick={() => {
                        setCurrentIco(item.slice(14, -37))
                    }}
                    ref={el => ref.current[index] = el} 
                    className='modal__ico-input' 
                    type='radio' 
                    name='icons' 
                    value={item}/>
                <img src={item} alt='ico'/>
            </label>
        )
    })

    const content = categories.map((item, index) => {
        const {id, name, icon} = item

        return (
            <div
                key={id}
                className={index === 0 ? "categories-item target" : "categories-item"}
                onClick={(e) => {
                    setTarget(e.target.textContent)
                    toggleTarget(index)
                }
            }>
                <IconSelector id={icon}/>
                <h3 className={type === 'light' ? "categories-item__name" : "categories-item__name dark"}>
                    {name}
                </h3>
            </div>
        )
    })

    return(
        <section className='sidebar'>
            <div className='sidebar__container _container'>
                <div className={type === 'light' ? 'sidebar__body' : 'sidebar__body dark'}>
                    <div className='sidebar__logo'>
                        <FontAwesomeIcon icon={faClipboardList} className='sidebar__icon'/>
                        <h1 className='sidebar__title'>Task Book</h1>
                    </div>
                    <div className='sidebar__categories'>
                        <h2 className='sidebar__categories-title'>Категории</h2>
                        {content}
                        <button
                            className='categories-item__btn' 
                            onClick={() => {
                                setModalActive(true)
                            }}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='categories-item__btn-ico' d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke="#29A19C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className='categories-item__btn-ico' d="M9 6V12" stroke="#29A19C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className='categories-item__btn-ico' d="M6 9H12" stroke="#29A19C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3>Добавить</h3>
                        </button>
                        <CategoriesModal
                            input={input} 
                            active={modalActive} 
                            setActive={setModalActive} 
                            changeInput={changeInput}
                            addCategories={addCategories}
                            icoContent={icoContent}
                            currentIco={currentIco}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}