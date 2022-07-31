import '../../styles/global.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import SidebarCategories from './categories/categories'
export default function Sidebar(setModalActive){
    
    return(
        <section className='sidebar'>
            <div className='sidebar__body'>
                <div className='sidebar__logo'>
                    <FontAwesomeIcon icon={faClipboardList} className='sidebar__icon'/>
                    <h1 className='sidebar__title'>Task Book</h1>
                </div>
                <div className='sidebar__categories'>
                    <h2 className='sidebar__categories-title'>Категории</h2>
                    <SidebarCategories setModalActive={setModalActive}/>
                </div>
            </div>
        </section>
    )
}