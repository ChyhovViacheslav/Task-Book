import { useContext } from 'react'
import '../../../styles/global.scss'
import { ThemeContext } from '../../theme/ThemeProvider'

export default function Block({children, className, title, dots, style}){
    const {type} = useContext(ThemeContext)
    return(
        <div className={`block ${className}`} style={style}>
            <div className={type ? 
                `block__body ${className}__body`: 
                `block__body ${className}__body dark`}>
                <div className={`${className}__title`}>
                    <h1>{title}</h1>
                    {dots}
                </div>
                {children}
            </div>
        </div>
    )
}