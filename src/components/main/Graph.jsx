import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          0, 4000, 5000, 6000, 5000, 5000, 4000, 5000, 4000, 2000, 3000, 3500,
        ],
        borderColor: "#008140",
        backgroundColor: "#008140",
      },
      {
        label: "Expense",
        data: [
          0, 3000, 2000, 4000, 3000, 3000, 4000, 3000, 4000, 3000, 2700, 2900,
        ],
        borderColor: "#D90001",
        backgroundColor: "#D90001",
      },
      {
        label: "Savings",
        data: [0, 1000, 3000, 4000, 2000, 2000, 3000, 2000, 0, -1000, 300, 600],
        borderColor: "#111111",
        backgroundColor: "#111111",
      },
    ],
  };
  return (
    <div className="dash-grid-span-3">
      <div className="container graph-container">
        <div className="dash-graph">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
