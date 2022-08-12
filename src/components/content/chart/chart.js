import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Chart(){
    const data = [{name: 'пн', uv: 5, pv: 2, amt: 15}, 
        {name: 'вт', uv: 5, pv: 2, amt: 15}, 
        {name: 'ср', uv: 5, pv: 4, amt: 15},
        {name: 'чт', uv: 5, pv: 6, amt: 15},
        {name: 'пт', uv: 5, pv: 7, amt: 15},
        {name: 'сб', uv: 5, pv: 9, amt: 15},
        {name: 'вс', uv: 5, pv: 15, amt: 15}];

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
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
            </div>
        </div>
    )
}