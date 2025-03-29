import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WorkoutChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="calories" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WorkoutChart;
