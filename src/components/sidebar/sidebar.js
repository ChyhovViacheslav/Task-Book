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
        const id = Math.floor(Math.random() * 99999999999999)

        const newArr = {id: id, icon: faHouse, name: input}

        const names = (el) => el.name === newArr.name;

        if(categories.length >= 10){
            console.log("Слишком много категорий")
        } else if (categories.some(names)){
            console.log('Повтор названия')
        } else{
            changeCategories([...categories, newArr])
        }
    }

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
                {/* <FontAwesomeIcon icon={icon} className='categories-item__icon'/> */}
                <img src={'../../'} alt=''/>
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
                            onClick={() => {
                                setModalActive(true)
                            }} 
                            className='categories-item__btn'>
                            <FontAwesomeIcon icon={faCirclePlus} className='categories-item__btn-icon'/>
                            <h3>Добавить</h3>
                        </button>
                        <CategoriesModal
                            input={input}
                            categories={categories} 
                            active={modalActive} 
                            setActive={setModalActive} 
                            changeInput={changeInput}
                            addCategories={addCategories}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}