import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";


function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="app_container">
      <Posts />
    </div>
  );
}

export default App;
