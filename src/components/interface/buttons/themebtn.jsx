import { useContext } from "react"
import { IconSelector } from "../../../assets/icons/icons"
import { ThemeContext } from "../../theme/ThemeProvider"
import './themebtn.scss'

export default function ThemeBtn({style}){
    const {type, setType} = useContext(ThemeContext)

    return(
        <button 
            className='themebtn'
            style={style}
            onClick={() => {
            setType(!type)
        }}>
            <IconSelector className='themebtn__ico' id={type ? 'moon' : 'sun'}/>
        </button>
    )
}