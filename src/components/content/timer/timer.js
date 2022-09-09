import { locales } from "moment"
import { useState, useEffect, useContext } from "react"
import Block from "../../interface/block/block"
import { ThemeContext } from "../../theme/ThemeProvider"

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
                        <div className={type === 'light' ? 'timer__ico' : 'timer__ico dark'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6V12L16 14" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span>{time.toLocaleTimeString()}</span>
                    </div>
                </div>
                <div className="timer__item">
                    <p>А сегодня у нас</p>
                    <div className="timer__date items">
                        <div className={type === 'light' ? 'timer__ico' : 'timer__ico dark'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 2V6" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 2V6" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 10H21" stroke="#282846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span>{time.toLocaleString(locales, {dateStyle:'long'}).slice(-0, -2)}</span>
                    </div>
                </div>
            </div>
        </Block>
    )    
}