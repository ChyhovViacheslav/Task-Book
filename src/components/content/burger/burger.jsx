import '../../../styles/global.scss'
import { useWindowDimensions } from '../../services/services'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../theme/ThemeProvider'
import CategoryAddBtn from '../../interface/buttons/categoryaddbtn'
import { Categories } from '../categories/categories'
import ThemeBtn from '../../interface/buttons/themebtn'
import CategoryDeleteBtn from '../../interface/buttons/categorydeletebtn'

export default function Burger({ setTarget, categories, toggleTarget, burgerIsTogle, setBurgerTogle, isModalActive, setModalActive }) {
    const { width } = useWindowDimensions()
    const { type } = useContext(ThemeContext)

    useEffect(() => {
        if (width >= 768) {
            setBurgerTogle(false)
        }
    }, [width])

    return (
        <nav className={burgerIsTogle ? 'burger' : 'burger toggle'}>
            <div className='burger__body'>
                <div className={type ? 'burger__categories' : 'burger__categories dark'}>
                    <h2>Категории</h2>
                    <Categories
                        setTarget={setTarget}
                        categories={categories}
                        toggleTarget={toggleTarget} />
                    <CategoryAddBtn
                        style={{ marginTop: '20px' }}
                        isModalActive={isModalActive}
                        setModalActive={setModalActive} />
                </div>
                <ThemeBtn style={{ margin: '20px 0px 20px 0px' }} />
            </div>
        </nav>
    )
}