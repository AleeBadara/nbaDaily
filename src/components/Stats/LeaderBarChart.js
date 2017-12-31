import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Brush, ReferenceLine } from 'recharts'

const LeaderBarChart = (props) => {
        return (
            /*<BarChart width={1000} height={300} data={props.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="player" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="stat" fill="#8884d8" />
            </BarChart>*/

<BarChart width={300} height={400} data={props.data}
margin={{top: 5, right: 0, left: 0, bottom: 5}}>
<XAxis dataKey="player" interval={1} />
<YAxis/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}} />
<Bar dataKey="stat" barSize={10} fill="#8884d8" />
</BarChart>
        )
    }

export default LeaderBarChart;