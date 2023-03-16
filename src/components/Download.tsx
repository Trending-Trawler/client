import { useContext, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { SettingsContext } from "./SettingsContext";
import "../loader.css"

function Download() {
  const socketUrl = "ws://localhost:8000/video";
  const [video, setVideo] = useState<Blob | null>(null);

  const { settings } = useContext(SettingsContext);

  const voice = settings.voiceId;

  const { sendMessage, lastMessage } = useWebSocket(socketUrl);
  function handleDownload() {
    const element = document.getElementById("bttm");
    element?.scrollIntoView();
    document.getElementById("downloadBtn")?.classList.add("hidden");
    document.getElementById("loader")?.classList.remove("hidden")
    sendMessage("download");
  }

  useEffect(() => {
    if (lastMessage !== null) {
      const blob = new Blob([lastMessage.data], { type: "video/mp4" });
      setVideo(blob);
    }
  }, [lastMessage]);

  return (
    <div className="container pb-10 mx-auto">
      <div className="pt-10 text-white text-sm flex flex-col gap-4 justify-center font-bold text-xl">
        <button
          id="downloadBtn"
          onClick={handleDownload}
          className="hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 px-6 drop-shadow-xl"
        >
          <svg
            className="inline pr-2 fill-white"
            width="40"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z" />
          </svg>
          Download
        </button>
        <video
          width="30%"
          src={video ? URL.createObjectURL(video) : ""}
          hidden={video === null}
          controls
        />
        <div id="loader" className="text-center hidden">
          <svg className="pl m-auto" width="240" height="240" viewBox="0 0 240 240">
            <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
            <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
            <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
          </svg>
          <div className="text-2xl">Downloading video...</div>
          <div>This process can take up to 5 minutes.</div>
        </div>
      </div>
      <div id="bttm"></div>
    </div>
  );
}

export { Download };
