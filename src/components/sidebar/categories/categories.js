import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { faCirclePlus, faHouse } from "@fortawesome/free-solid-svg-icons"
import '../../../styles/global.scss'
import CategoriesModal from "./categories-modal"
import { useLocalStorage } from "../../services/services"

export default function SidebarCategories(){
    const [modalActive, setModalActive] = useState(false)
    const [categories, changeCategories] = useLocalStorage('categories', [{icon: faHouse, name: 'Дом'}])
    const [target, changeTarget] = useState(categories[0])
    let [input, changeInput] = useState('')

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

    const toggleTarget = (index) => {
        document.querySelectorAll('.categories-item').forEach(el => {
            el.classList.remove('target')
        })
        document.querySelectorAll('.categories-item')[index].classList.add('target')
    }

    const content = categories.map(item => {
        const {name, icon} = item
        return (
            <div 
                key={name} 
                className={"categories-item"} 
                onClick={(e) => {
                    if(e.target.className === 'categories-item' || e.target.className === 'categories-item target'){
                        const index = categories.findIndex((el, i) => {
                            if(el.name === name){
                                return true
                            }
                        })
                        toggleTarget(index)
                    }
            }}>
                <FontAwesomeIcon icon={icon} className='categories-item__icon'/>
                <h3 className="categories-item__name">{name}</h3>
            </div>
        )
    })

    document.querySelectorAll('.categories-item').forEach(item => {
        
    })

    return(
        <>
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
        </>
    )
}