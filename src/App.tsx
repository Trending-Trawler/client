import "./App.css";
import { Properties } from "./components/Properties";
import { Navbar } from "./components/Navbar";
import { Thread } from "./components/Thread";
import { TextToSpeech } from "./components/TextToSpeech";
import { Download } from "./components/Download";
import { BackgroundSection } from "./components/BackgroundSection";
import { SettingsProvider } from "./components/SettingsContext";
import VoiceDropdown from "./components/VoiceDropdown";
function App() {

  return (
    <div className="bg-gradient-to-b from-blue-800 to-pink-400 bg-repeat-y">
      <div className="sticky top-0 z-50 backdrop-filter bg-cyan-800/10 backdrop-blur-sm transition-all duration-500">
        <Navbar />
      </div>
      <div className="flex flex-col space-y-10 z-10">
          <SettingsProvider>
          <Thread />
          <TextToSpeech />
          <BackgroundSection />
          <Download />
          </SettingsProvider>
      </div>
    </div>
  );
}

export default App;
