import "./App.css";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { Properties } from "./components/Properties";
import { StrombergQuotes } from "./components/Stromberg";

function App() {
  return (
      <div className="bg-gradient-to-b from-purple-400 to-pink-400 bg-repeat-y overflow-auto">
        <div className="h-screen w-screen">
          <Header />
          <Preview />
          <Properties />
          <StrombergQuotes />
        </div>
      </div>
  );
}

export default App;
