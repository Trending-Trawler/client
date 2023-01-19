import "./App.css";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { Properties } from "./components/Properties";
import { StrombergQuotes } from "./components/Stromberg";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-400 to-pink-400 overflow-hidden">
      <Header />
      <Preview />
      <Properties />
      <StrombergQuotes />
    </div>
  );
}

export default App;
