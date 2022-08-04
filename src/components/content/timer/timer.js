import { locales } from "moment"
import { useState, useEffect } from "react"

export default function Timer(){
    const [hourse, setHourse] = useState({time: new Date()})

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
        <div className="timer">
            <div className="timer__body">
                <div className="timer__title">
                    <h1>Такс такс такс</h1>
                </div>
                <div className="timer__content">
                    <div className="timer__item">
                        <p>На часах у нас</p>
                        <div className="timer__hourse items">
                            {time.toLocaleTimeString()}
                        </div>
                    </div>
                    <div className="timer__item">
                        <p>А сегодня у нас</p>
                        <div className="timer__date items">
                            {time.toLocaleString(locales, {dateStyle:'long'}).slice(-0, -2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}