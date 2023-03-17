import "./App.css";
import { Navbar } from "./components/Navbar";
import { Thread } from "./components/Thread";
import { TextToSpeech } from "./components/TextToSpeech";
import { Download } from "./components/Download";
import { BackgroundSection } from "./components/BackgroundSection";
import { SettingsProvider } from "./components/SettingsContext";
import { StrombergQuotes } from "./components/Stromberg";

function App() {
  return (
    <div className="relative bg-gradient-to-b from-page-bg to-black">
      <div className="sticky top-0 z-50 backdrop-filter backdrop-blur-sm">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-10 z-40">
        <SettingsProvider>
          <Thread />
          <TextToSpeech />
          <BackgroundSection />
          <Download />
          <StrombergQuotes />
        </SettingsProvider>
      </div>
    </div>
  );
}

export default App;
