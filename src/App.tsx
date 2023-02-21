import "./App.css";
import { Properties } from "./components/Properties";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-pink-400 bg-repeat-y">
      <div className="sticky top-0 z-50 backdrop-filter backdrop-blur-sm transition-all duration-500">
        <Navbar />
      </div>
      <Properties />
      <Properties />
      <Properties />
      <Properties />
      <Properties />
      <Properties />
      <Properties />
    </div>
  );
}

export default App;
