import '../../styles/global.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import CategoriesModal from "./categories/categories-modal"

import home from '../../assets/icons/home.svg'
import zap from '../../assets/icons/zap.svg'
import briefcase from '../../assets/icons/briefcase.svg'
import users from '../../assets/icons/users.svg'

export default function Sidebar({setTarget, categories, changeCategories, toggleTarget}){
    const [modalActive, setModalActive] = useState(false)
    const [icons, setIcons] = useState([home, zap, briefcase, users])
    const [currentIco, setCurrentIco] = useState(null)
    const [input, changeInput] = useState('')
    const ref = useRef([])

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

        let ico

        switch (icon) {
            case 'home':
                ico = home 
                break;
            case 'zap':
                ico = zap
                break;
            case 'briefcase':
                ico = briefcase
                break;
            case 'users':
                ico = users
                break;
            default:
                break;
        }

        return (
            <div
                key={id}
                className={index === 0 ? "categories-item target" : "categories-item"}
                onClick={(e) => {
                    setTarget(e.target.textContent)
                    toggleTarget(index)
                }
            }>
                <img src={ico} alt=''/>
                <h3 className="categories-item__name">{name}</h3>
            </div>
        )
    })

    return(
        <section className='sidebar'>
            <div className='sidebar__container _container'>
                <div className='sidebar__body'>
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
                            <FontAwesomeIcon icon={faCirclePlus} className='categories-item__btn-icon'/>
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