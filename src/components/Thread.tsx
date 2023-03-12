import { useState } from "react";

function Thread() {
  const [inputText, setInputText] = useState("");
  function sendLink() {
    console.log("Link sent: " + inputText);
  }

  return (
    <>
      <div className="flex flex-col items-center text-white">
        <div className="pt-10 font-bold text-center">
          <h1 className="text-2xl">Test it yourself</h1>
          <h2 className="text-xl">Enter a thread name</h2>
        </div>
        <div className="bg-slate-800/30 mt-5 rounded border border-black border-2 drop-shadow-xl">
          <input
            type="text"
            placeholder="Thread Link"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="bg-transparent text-white text-sm py-0.5 px-1 rounded-sm placeholder-white/80 focus:outline-none"
          />
          <button
            type="submit"
            className="pr-1 text-black font-bold"
            onClick={sendLink}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export { Thread };
