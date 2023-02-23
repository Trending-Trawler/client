import { useState } from "react";

function TextToSpeech() {
  const [readingSpeed, setReadingSpeed] = useState<string>("50");
  const [voice, setVoice] = useState<string>("femaleEn");
  
  console.log(readingSpeed);
  console.log(voice);

  return (
    <>
      <div className="flex flex-row items-center text-white">
        <div className="container rounded-lg pb-10 sm:mx-auto mx-3 backdrop-filter bg-slate-50/10 backdrop-blur-sm">
          <div className="pb-8 pt-6 font-bold text-center">
            <h1 className="text-2xl">Text to Speech</h1>
          </div>
          <div className="px-8 text-center font-bold">
            <div className="grid grid-cols-3">
              <div className="lg:grid lg:grid-cols-2 sm:pl-3 sm:pr-0 pr-4">
                <h2 className="lg:col-span-2 text-xl"><div className="md:block hidden">Pick a Voice</div><div className="md:hidden block">Voice</div></h2>
                <div className="xl:pt-10 md:pt-4 pt-2 text-white text-base">
                  <button onClick={(e) => setVoice("female")} className="sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl">
                  <svg className="xl:h-8 h-0 xl:w-8 w-0 xl:visible invisible inline xl:pr-2 fill-white" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0-6c1.178 0 2 .822 2 2s-.822 2-2 2-2-.822-2-2 .822-2 2-2zm1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"/><path d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"/></svg>
                    Female</button>
                </div>
                <div className="xl:pt-10 md:pt-4 pt-2 text-white text-base">
                  <button onClick={(e) => setVoice("male")} className="sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl">
                  <svg className="xl:h-8 h-0 xl:w-8 w-0 xl:visible invisible inline xl:pr-2 fill-white" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0-6c1.178 0 2 .822 2 2s-.822 2-2 2-2-.822-2-2 .822-2 2-2zm1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"/><path d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"/></svg>
                    Male</button>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 sm:px-0 px-2">
                <div className="col-span-2">
                  <h2 className="lg:col-span-2 text-xl"><div className="md:block hidden">Pick a Language</div><div className="md:hidden block">Language</div></h2>
                  <div className="xl:pt-10 md:pt-4 pt-2 text-white text-base">
                    <select name="language" className="text-center sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl">
                      <option value="English">English</option>
                      <option value="German">Deutsch</option>
                      <option value="French">Francais</option>
                      <option value="Spanish">Espanol</option>
                    </select>
                  </div>    
                </div></div>
              <div className="sm:pl-0 pl-4">
                <h2 className="font-bold text-xl"><div className="md:block hidden">Adjust reading speed</div><div className="md:hidden block">Speed</div></h2>
                <div className="sm:pt-10 pt-5">
                  <input className="sm:w-max w-24" type="range" step="1" value={readingSpeed} onChange={(e) => setReadingSpeed(e.target.value)}/>
                  <div className="grid grid-cols-2 text-sm">
                    <div className="lg:text-center text-left 2xl:pl-20 xl:pl-8 md:pl-4 sm:pl-0 pl-3">slow</div>
                    <div className="lg:text-center text-right 2xl:pr-20 xl:pr-8 md:pr-4 sm:pr-0 pr-3">fast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { TextToSpeech };
