import { useEffect } from "react";

export default function Remark({ newTask }){
    
    useEffect(() => {
      
    }, [newTask])
    
    const CreatedTask = () => {
        
        const dateValue = newTask.map(el => {
            return el.created
        })
        
        const counts = {};
        dateValue.forEach(x => {
            counts[x] = (counts[x] || 0) + 1;
        })
        
        if(Object.keys(counts).length > 0){
            const day = Object.entries(counts).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0]

            let days
        
            switch (day) {
                case 'Mon':
                    days = 'Понедельник'
                    break;
                case 'Tue':
                    days = 'Вторник'
                    break;
                case 'Wed':
                    days = 'Среду'
                    break;
                case 'Thu':
                    days = 'Четверг'
                    break;
                case 'Fri':
                    days = 'Пятницу'
                    break;
                case 'Sat':
                    days = 'Субботу'
                    break;
                case 'Sun':
                    days = 'Воскресенье'
                    break;
                default:
                    days = '';
                    break;
            }

            if(days === 'Вторник') {
                return (
                    <p>Больше всего задач вы создаете во <span>{days}</span></p>
                )
            } else{
                return(
                    <p>Больше всего задач вы создаете в <span>{days}</span></p>
                )
            }
        } else {
            return (
                <p>Вы пока не создали никаких задач</p>
            )
        }
    }

    return(
        <div className="remark">
            <div className="remark__body">
                <div className="remark__title">
                    <h1>Наблюдение</h1>
                </div>
                <div className="remark__content">
                    <div className="remark__create">
                        <CreatedTask/>
                    </div>
                    <div className="remark__complited">
                        <p>Больше всего задач вы завершаете во <span>Вторник</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}