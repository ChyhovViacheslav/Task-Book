import '../../../styles/global.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useContext } from 'react'
import CategoriesModal from "../categories/categories-modal"
import { ThemeContext } from '../../theme/ThemeProvider'
import { IconSelector } from '../../../assets/icons/icons'
import { useWindowDimensions } from '../../services/services'
import { Categories } from '../categories/categories'
import CategoryAddBtn from '../../interface/buttons/categoryaddbtn'

export default function Sidebar({ setTarget, categories, changeCategories, toggleTarget, setModalActive, isModalActive }) {
    const [currentIco, setCurrentIco] = useState(null)
    const [input, changeInput] = useState('')
    const icons = ['home', 'zap', 'briefcase', 'users']
    const ref = useRef([])
    const icoBodyRef = useRef()
    const { type } = useContext(ThemeContext)
    const { width } = useWindowDimensions()

    const addCategories = () => {
        const id = Math.floor(Math.random() * 99999999999999)

        const newArr = { id: id, icon: currentIco, name: input }

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
                    value={item} />
                <IconSelector className={type ? 'modal__ico-color' : 'modal__ico-color dark'} id={item} />
            </label>
        )
    })

    return (
        <section className={width >= 768 ? 'sidebar' : 'sidebar actives'}>
            <div className='sidebar__container _container'>
                <div className={type ? 'sidebar__body' : 'sidebar__body dark'}>
                    <div className='sidebar__logo'>
                        <FontAwesomeIcon icon={faClipboardList} className='sidebar__icon' />
                        <h1 className='sidebar__title'>Task Book</h1>
                    </div>
                    <div className='sidebar__categories'>
                        <h2 className='sidebar__categories-title'>Категории</h2>
                        <Categories
                            setTarget={setTarget}
                            categories={categories}
                            toggleTarget={toggleTarget}
                        />
                        <CategoryAddBtn
                            className={'categories-item__btn'}
                            style={{ marginTop: '30px' }}
                            setModalActive={setModalActive}
                            isModalActive={isModalActive} />
                        <CategoriesModal
                            icoBodyRef={icoBodyRef}
                            input={input}
                            active={isModalActive}
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