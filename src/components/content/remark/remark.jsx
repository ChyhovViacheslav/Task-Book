import { useEffect } from "react";
import Block from "../../interface/block/block";

export default function Remark({ newTask }){

    useEffect(() => {

    }, [newTask])

    const TaskDayCreated = () => {
        
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
                return <p>Больше всего задач вы создаете во <span>{days}</span></p>
            } else{
                return <p>Больше всего задач вы создаете в <span>{days}</span></p>
            }
        } else {
            return <p>Вы пока не создали никаких задач</p>
        }
    }

    const TaskDayComplited =  () => {
        const dateValue = newTask.map(el => {
            return el.complitedData
        })
        
        const counts = {};
        dateValue.forEach(x => {
            counts[x] = (counts[x] || 0) + 1;
        })

        const none = el => el.complitedData === ''

        if(Object.keys(counts).length > 0 && !newTask.some(none)){
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
                return <p>Больше всего задач вы завершаете во <span>{days}</span></p>
            } else{
                return <p>Больше всего задач вы завершаете в <span>{days}</span></p>
            }
        } else {
            return <p>Вы пока не завершили никаких задач</p>
        }
    }

    return (
        <Block className={'remark'} title={'Наблюдение'}>
                <div className="remark__content">
                    <div className="remark__create">
                        <TaskDayCreated />
                    </div>
                    <div className="remark__complited">
                        <TaskDayComplited />
                    </div>
                </div>
        </Block>
    )
}