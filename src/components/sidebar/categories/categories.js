// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { useState, useEffect, createRef, useRef } from "react"
// import { faCirclePlus, faHouse } from "@fortawesome/free-solid-svg-icons"
// import '../../../styles/global.scss'
// import CategoriesModal from "./categories-modal"
// import { useLocalStorage } from "../../services/services"

// export default function SidebarCategories(){


//     return(
//         <>
//             {content}
//             <button 
//                 onClick={() => {
//                     setModalActive(true)
//                 }} 
//                 className='categories-item__btn'>
//                 <FontAwesomeIcon icon={faCirclePlus} className='categories-item__btn-icon'/>
//                 <h3>Добавить</h3>
//             </button>
//             <CategoriesModal 
//                 active={modalActive} 
//                 setActive={setModalActive} 
//                 changeInput={changeInput}
//                 addCategories={addCategories}
//                 />
//         </>
//     )
// }