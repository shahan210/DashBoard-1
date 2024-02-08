import "./App.scss";
import Dash from "./components/main/Dash";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Dash/>
    </div>
  );
}

export default App;
