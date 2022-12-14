import '../../../styles/global.scss';
import { useEffect, useRef, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Block from '../../interface/block/block';

export default function Chart({newTask}){
    const [data, setData] = useState()
    const chartRef = useRef('')

    useEffect(() => {
        const currentDay = (day) => {
            const filtredDay = newTask.filter(el => {
                const time = el.time.slice(0, 3)
                if(day === time){
                    return el.complited
                } else return null
            })
            return filtredDay.length
        }

        const data = [{name: 'пн', uv: (newTask.length), pv: currentDay('Mon'), amt: (newTask.length + 10)}, 
            {name: 'вт', uv: (newTask.length), pv: currentDay('Tue'), amt: (newTask.length + 10)}, 
            {name: 'ср', uv: (newTask.length), pv: currentDay('Wed'), amt: (newTask.length + 10)},
            {name: 'чт', uv: (newTask.length), pv: currentDay('Thu'), amt: (newTask.length + 10)},
            {name: 'пт', uv: (newTask.length), pv: currentDay('Fri'), amt: (newTask.length + 10)},
            {name: 'сб', uv: (newTask.length), pv: currentDay('Sat'), amt: (newTask.length + 10)},
            {name: 'вс', uv: (newTask.length), pv: currentDay('Sun'), amt: (newTask.length + 10)}];

        setData(data)
    }, [newTask, chartRef.current.clientWidth])

    return(
        <Block className={'chart'} title={'График успеваемости'}>
            <div className='chart__wrapper' ref={chartRef}>
                <LineChart
                    fontFamily='Nunito'
                    fontSize='12px'
                    width={chartRef.current.clientWidth - 10}
                    height={170}
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: -35,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line 
                        type="monotone" 
                        dataKey="pv" 
                        stroke="#29A19C" 
                        fill='#29A19C' 
                        dot={{strokeWidth: 5}} 
                        activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </Block>
    )
}