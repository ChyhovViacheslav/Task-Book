import '../../../styles/global.scss'
import { useContext } from 'react'
import { IconSelector } from '../../../assets/icons/icons'
import { ThemeContext } from '../../theme/ThemeProvider'
import { useWindowDimensions } from '../../services/services'

export const Categories = ({categories, setTarget, toggleTarget}) => {
    const {type} = useContext(ThemeContext)
    const {width} = useWindowDimensions()
    
    const content = categories.map((item, index) => {
        const {id, name, icon} = item

        return (
            <div
                key={id}
                className={index === 0 ? "categories-item target" : "categories-item"}
                onClick={(e) => {
                    setTarget(e.target.textContent)
                    if(width >= 768){
                        toggleTarget(index)
                    } else {
                        toggleTarget(index + categories.length)
                    }
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
        <>
            {content}
        </>
    )
}