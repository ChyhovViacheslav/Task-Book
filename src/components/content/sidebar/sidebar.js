import '../../../styles/global.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useContext } from 'react'
import CategoriesModal from "../categories/categories-modal"
import { ThemeContext } from '../../theme/ThemeProvider'
import { IconSelector } from '../../../assets/icons/icons'

export default function Sidebar({setTarget, categories, changeCategories, toggleTarget}){
    const [modalActive, setModalActive] = useState(false)
    const [currentIco, setCurrentIco] = useState(null)
    const [input, changeInput] = useState('')
    const icons = ['home', 'zap', 'briefcase', 'users']
    const ref = useRef([])
    const icoBodyRef = useRef()
    const {type} = useContext(ThemeContext)

    const addCategories = () => {
        const id = Math.floor(Math.random() * 99999999999999)

        const newArr = {id: id, icon: currentIco, name: input}

        changeCategories([...categories, newArr])
    }

    const icoContent = icons.map((item, index) => {
        return (
            <label className='modal__ico-content' key={index}>
                <input
                    onClick={() => {
                        icoBodyRef.current.style.outline = 'none'
                        setCurrentIco(item)
                    }}
                    ref={el => ref.current[index] = el} 
                    className='modal__ico-input' 
                    type='radio' 
                    name='icons' 
                    value={item}/>
                <IconSelector className={type ? 'modal__ico-color' : 'modal__ico-color dark'} id={item} />
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
                <IconSelector className={type ? 'categories-item__ico' : 'categories-item__ico dark'} id={icon}/>
                <h3 className={type ? "categories-item__name" : "categories-item__name dark"}>
                    {name}
                </h3>
            </div>
        )
    })

    return(
        <section className='sidebar'>
            <div className='sidebar__container _container'>
                <div className={type ? 'sidebar__body' : 'sidebar__body dark'}>
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
                            <IconSelector className={'categories-item__btn-ico'} id={'plus-square'} />
                            <h3>Добавить</h3>
                        </button>
                        <CategoriesModal
                            icoBodyRef={icoBodyRef}
                            input={input} 
                            active={modalActive} 
                            setActive={setModalActive} 
                            changeInput={changeInput}
                            addCategories={addCategories}
                            icoContent={icoContent}
                            currentIco={currentIco}
                            categories={categories}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}