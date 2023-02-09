import React from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

import { analiticsData } from '@/constant';

//todo:CHANGE COLOR WITH DARK - LIGTH
const CustomRadarChart = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart cx='50%' cy='50%' outerRadius='80%' data={analiticsData}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name='USA'
          dataKey='A'
          stroke='yellow'
          fill='yellow'
          fillOpacity={0.6}
        />
        <Radar
          name='Europe'
          dataKey='B'
          stroke='white'
          fill='white'
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;
