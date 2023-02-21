import { useState } from "react";

function Properties() {
  const [thread, setThread] = useState("");
  const [background, setBackground] = useState("");

  const handleSubmit = () => {
    console.log(thread, background);
  };

  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="mt-4">
          <p className="text-white text-xs drop-shadow-2xl">
            thread url
            <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            value={thread}
            onChange={(e) => setThread(e.target.value)}
            className=" w-60 mt-0.5 rounded border border-black drop-shadow-xl text-sm py-0.5 px-1"
          />
        </div>
        <div className="mt-4">
          <p className="text-white text-xs drop-shadow-2xl">
            background url
            <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            className=" w-60 mt-0.5 rounded border border-black drop-shadow-xl text-sm py-0.5 px-1"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-green-300 rounded border border-black drop-shadow-2xl"
          >
            <p className="py-1.5 px-4 text-sm font-bold">Download</p>
          </button>
        </div>
      </div>
    </>
  );
}

export { Properties };
