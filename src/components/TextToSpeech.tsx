import React from "react";
import { useState } from "react";

function TextToSpeech() {
  const [readingSpeed, setReadingSpeed] = useState<string>("50");
  const [voice, setVoice] = useState<string>("Female");
  const [language, setLanguage] = useState<string>("English");
  
  console.log(readingSpeed);
  console.log(voice);

  return (
    <div>
      <div className="flex flex-row items-center text-white mt-2">
        <div className="container rounded-lg pb-10 sm:mx-auto mx-3 backdrop-filter bg-slate-50/10 backdrop-blur-sm">
          <div className="pb-6 pt-6 font-bold text-center">
            <h1 className="text-4xl">Text to Speech</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-center">Pick a Voice</h1>
            <div className="flex flex-row pt-2">
              <div className="flex-auto text-left ml-4 sm:ml-16 lg:ml-20 xl:ml-64 2xl:ml-80">
                <button onClick={(e) => setVoice("Male")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-700/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">Male</div></button>
              </div>
              <div className="flex-auto text-right mr-4 sm:mr-16 lg:mr-20 xl:mr-64 2xl:mr-80">
                <button onClick={(e) => setVoice("Female")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-700/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">Female</div></button>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-sm font-semibold text-center">Selected: <div className="text-lg font-bold italic">{voice}</div></h1>
            </div>
            <h1 className="text-2xl font-bold text-center mt-10">Pick a Language</h1>
            <div className="flex flex-row pt-2">
              <div className="flex-auto text-left ml-4 sm:ml-16 lg:ml-20 xl:ml-64 2xl:ml-80">
                <button onClick={(e) => setLanguage("English")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-700/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">English</div></button>
              </div>
              <div className="flex-auto text-center">
                <button onClick={(e) => setLanguage("German")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-700/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">German</div></button>
              </div>
              <div className="flex-auto text-right mr-4 sm:mr-16 lg:mr-20 xl:mr-64 2xl:mr-80">
                <button onClick={(e) => setLanguage("French")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-700/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">French</div></button>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-sm font-semibold text-center">Selected: <div className="text-lg font-bold italic">{language}</div></h1>
            </div>
            <h1 className="text-2xl font-bold text-center mt-10">Adjust reading speed</h1>
            <div className="flex flex-row pt-2">
              <div className="flex-auto text-center">                
                <input type="range" step="1" value={readingSpeed} onChange={(e) => setReadingSpeed(e.target.value)}/>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-sm font-semibold text-center">Selected: <div className="text-lg font-bold italic">{readingSpeed}</div></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TextToSpeech };
