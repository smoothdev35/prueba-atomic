import { Outlet } from "react-router";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  
  return (
    <div className="app flex-wrap-center">
      <Homepage />
    </div>
  );
}

export default App;
