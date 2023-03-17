import { useContext, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { SettingsContext } from "./SettingsContext";
import "../loader.css";

function Download() {
  const socketUrl = "ws://api.trending-trawler.com//video";
  const [video, setVideo] = useState<Blob | null>(null);

  const { settings } = useContext(SettingsContext);

  const voice = settings.voiceId;

  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  function handleDownload() {
    const element = document.getElementById("bttm");
    element?.scrollIntoView();
    document.getElementById("downloadBtn")?.classList.add("hidden");
    document.getElementById("loader")?.classList.remove("hidden");
    sendMessage("download");
  }

  useEffect(() => {
    if (lastMessage !== null) {
      const blob = new Blob([lastMessage.data], { type: "video/mp4" });
      setVideo(blob);
    }
  }, [lastMessage]);

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 w-48 h-48 rounded-tl-full rounded-bl-full bg-purple-400 bg-opacity-60
        blur-own2 z-0">
      </div>
      <div className="container pb-10 mx-auto">
        <div className="pt-10 text-white text-sm flex flex-col gap-4 justify-center font-bold text-xl">

          <div className="m-auto text-center">
            <button id="downloadBtn" className="generator w-50 text-lg text-center" onClick={handleDownload}>
              Generate
            </button>
          </div>

          <video
            width="30%"
            src={video ? URL.createObjectURL(video) : ""}
            hidden={video === null}
            controls
          />
          <div id="loader" className="text-center hidden">
            <svg className="pl m-auto" width="240" height="240" viewBox="0 0 240 240">
              <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000"
                      strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            </svg>
            <div className="text-2xl">Downloading video...</div>
            <div>This process can take up to 5 minutes.</div>
          </div>
        </div>
        <div id="bttm"></div>
      </div>
    </div>
  );
}

export { Download };
