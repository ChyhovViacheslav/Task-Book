import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Chart({newTask}){
    const [data, setData] = useState()

    const currentDay = (day) => {
        const filtredDay = newTask.filter(el => {
            const time = el.time.slice(0, 3)
            if(day === time){
                return el.complited
            }
        })
        return filtredDay.length
    }

    useEffect(() => {
        const data = [{name: 'пн', uv: (newTask.length), pv: currentDay('Mon'), amt: (newTask.length + 10)}, 
            {name: 'вт', uv: (newTask.length), pv: currentDay('Tue'), amt: (newTask.length + 10)}, 
            {name: 'ср', uv: (newTask.length), pv: currentDay('Wed'), amt: (newTask.length + 10)},
            {name: 'чт', uv: (newTask.length), pv: currentDay('Thu'), amt: (newTask.length + 10)},
            {name: 'пт', uv: (newTask.length), pv: currentDay('Fri'), amt: (newTask.length + 10)},
            {name: 'сб', uv: (newTask.length), pv: currentDay('Sat'), amt: (newTask.length + 10)},
            {name: 'вс', uv: (newTask.length), pv: currentDay('Sun'), amt: (newTask.length + 10)}];

        setData(data)
    }, [newTask])

    return(
        <div className="chart">
            <div className="chart__body">
                <div className="chart__title">
                    <h1>График успеваемости</h1>
                </div>
                <LineChart
                    fontFamily='Nunito'
                    fontSize='12px'
                    width={430}
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
                    <Line 
                        type="monotone" 
                        dataKey="uv" 
                        stroke="#82ca9d" />
                    </LineChart>
            </div>
        </div>
    )
}