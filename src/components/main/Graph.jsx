import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "./Data";

export default function Graph() {
  const [userData, setUserData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5],
    datasets: [
      {
        label: "ersUs Gained",
        data: [4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 4],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
    innerWidth: 101,
  });
  return (
    <div
      className="dash-grid-span-3"
      style={{
        margin: 5,
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center" }}>ExpensesDnd</div>
        <div className="dash-graph">
          <Bar data={userData} width={500} />
        </div>
      </div>
    </div>
  );
}
