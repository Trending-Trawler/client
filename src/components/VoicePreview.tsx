import { useContext, useState } from "react";
import { SettingsContext } from "./SettingsContext";
import "../loader.css"

type AudioSource = string | null;

export default function VoicePreview() {
  const { settings } = useContext(SettingsContext);
  const [audioSrc, setAudioSrc] = useState<AudioSource>(null);

  async function handlePlay(): Promise<void> {
    try {
      const response = await fetch(
          "http://localhost:8000/voice/preview?text=This%20is%20the%20voice%20you%20selected%20to%20read%20your%20video&" +
          new URLSearchParams({ voice_id: String(settings.voiceId) }),
          {
            method: "GET",
            mode: "cors",
          }
      );
      const blob = await response.blob();
      const audioSrc = URL.createObjectURL(blob);
      const audio = new Audio(audioSrc);
      audio.play();
      // Release object URL and remove blob object when playback is finished
      audio.addEventListener("ended", () => {
        URL.revokeObjectURL(audioSrc);
      });
    } catch (error) {
      console.error("Error fetching or extracting voice:", error);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="m-auto text-center">
          <button id="voicePre" className="generator w-30 text-lg text-center" onClick={handlePlay}>
            Play
          </button>
        </div>
      </div>
    </>
  );
}
