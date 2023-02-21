import "./App.css";
import { Properties } from "./components/Properties";
import { Navbar } from "./components/Navbar";
import { Thread } from "./components/Thread";

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-pink-400 bg-repeat-y">
      <div className="sticky top-0 z-50 backdrop-filter bg-cyan-800/10 backdrop-blur-sm transition-all duration-500">
        <Navbar />
      </div>
      <Thread />
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
