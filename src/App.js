import "./App.css";
import { NavBar } from "./Navbar";

export default function App() {
  const Example = () => {
    return <p>Example component</p>;
  };

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <NavBar />
    </div>
  );
}
