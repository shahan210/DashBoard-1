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
        data: [0, 4, 5, 6, 5, 5, 4, 5, 4, 2],
        borderColor: "#008140",
        backgroundColor: "#008140",
      },
      {
        label: "Expense",
        data: [0, 3, 2, 4, 3, 3, 4, 2, 4, 3],
        borderColor: "#D90001",
        backgroundColor: "#D90001",
      },
      {
        label: "Savings",
        data: [0, 1, 3, 4, 2, 2, 3, 3, 2, 4],
        borderColor: "#111111",
        backgroundColor: "#111111",
      },
    ],
  };
  return (
    <div
      className="dash-grid-span-3"
      style={{
        margin: 5,
      }}
    >
      <div className="container graph-container">
        <div style={{ textAlign: "center" }}>ExpensesDnd</div>
        <div className="dash-graph">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
