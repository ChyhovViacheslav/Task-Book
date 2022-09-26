import { locales } from "moment"
import { useState, useEffect, useContext } from "react"
import Block from "../../interface/block/block"
import { ThemeContext } from "../../theme/ThemeProvider"
import { IconSelector } from "../../../assets/icons/icons.jsx"

export default function Timer(){
    const [hourse, setHourse] = useState({time: new Date()})
    const {type} = useContext(ThemeContext)

    useEffect(() => {
        const update = setInterval(() => {
            setHourse({time: new Date()})
        }, 1 * 1000)
      return () => {
        clearInterval(update)
      }
    }, [])
    

    const {time} = hourse
    return(
        <Block className={'timer'} title={'Такс такс такс'}>
            <div className="timer__content">
                <div className="timer__item">
                    <p>На часах у нас</p>
                    <div className="timer__hourse items">
                        <div className={type ? 'timer__ico' : 'timer__ico dark'}>
                            <IconSelector id={'clock'}/>
                        </div>
                        <span>{time.toLocaleTimeString()}</span>
                    </div>
                </div>
                <div className="timer__item">
                    <p>А сегодня у нас</p>
                    <div className="timer__date items">
                        <div className={type ? 'timer__ico' : 'timer__ico dark'}>
                            <IconSelector id={'calendar'}/>
                        </div>
                        <span>{time.toLocaleString(locales, {dateStyle:'long'}).slice(-0, -2)}</span>
                    </div>
                </div>
            </div>
        </Block>
    )    
}