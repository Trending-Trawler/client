import { useContext, useState } from "react";
import { SettingsContext } from "./SettingsContext";

type AudioSource = string | null;

export default function VoicePreview() {
  const { settings } = useContext(SettingsContext);
  const [audioSrc, setAudioSrc] = useState<AudioSource>(null);

  async function getPreview() {
    try {
      const response = await fetch(
        "http://localhost:8000/voice/preview?text=This%20is%20the%20voice%20you%20selected%20to%20read%20your%20video&" +
          new URLSearchParams({ voice_url: String(settings.voiceId) }),
        {
          method: "GET",
          mode: "cors",
        }
      );
      const blob = await response.blob();
      setAudioSrc(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching or extracting voice:", error);
    }
  }

  function handlePlay(): void {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      getPreview();
      if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlay}
        >
          Play
        </button>
      </div>
    </>
  );
}
