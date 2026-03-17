import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function BudgetChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="project" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budget" fill="#8884d8" />
          <Bar dataKey="actual" fill="#ff7300" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BudgetChart;