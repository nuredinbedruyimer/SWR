import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./features/TodoLists";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex justify-center items-center min-w-max">
      <TodoList />
    </div>
  );
}

export default App;
