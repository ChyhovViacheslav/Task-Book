import '../../styles/global.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { faCirclePlus, faHouse } from "@fortawesome/free-solid-svg-icons"
import CategoriesModal from "./categories/categories-modal"

export default function Sidebar({setTarget, categories, changeCategories, toggleTarget}){
    const [modalActive, setModalActive] = useState(false)
    let [input, changeInput] = useState('')

    useEffect(() => {

    }, [])

    const addCategories = () => {
        if(input.length >= 12){
            input = `${input.slice(0, 12)}...`
        }

        const newArr = {icon: faHouse, name: input}
        
        if(categories.length >= 10){
            console.log("Слишком много категорий")
        } else if(categories[(categories.length - 1)].name === newArr.name){
            console.log('Повторение названия категории')
        } else{
            changeCategories([...categories, newArr])
        }
    }

    const content = categories.map((item, index) => {
        const {name, icon} = item
        return (
            <div
                key={name}
                className={index === 0 ? "categories-item target" : "categories-item"}
                onClick={(e) => {
                    setTarget(e.target.textContent)
                    toggleTarget(index)
                }
            }>
                <FontAwesomeIcon icon={icon} className='categories-item__icon'/>
                <h3 className="categories-item__name">{name}</h3>
            </div>
        )
    })

    return(
        <section className='sidebar'>
            <div className='sidebar__body'>
                <div className='sidebar__logo'>
                    <FontAwesomeIcon icon={faClipboardList} className='sidebar__icon'/>
                    <h1 className='sidebar__title'>Task Book</h1>
                </div>
                <div className='sidebar__categories'>
                    <h2 className='sidebar__categories-title'>Категории</h2>
                    {content}
                    <button 
                        onClick={() => {
                            setModalActive(true)
                        }} 
                        className='categories-item__btn'>
                        <FontAwesomeIcon icon={faCirclePlus} className='categories-item__btn-icon'/>
                        <h3>Добавить</h3>
                    </button>
                    <CategoriesModal 
                        active={modalActive} 
                        setActive={setModalActive} 
                        changeInput={changeInput}
                        addCategories={addCategories}
                    />
                </div>
            </div>
        </section>
    )
}