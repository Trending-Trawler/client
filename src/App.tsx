import "./App.css";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { Properties } from "./components/Properties";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-400 to-pink-400">
      <Header />
      <Preview />
      <Properties />
    </div>
  );
}

export default App;
