import VoiceDropdown from "./VoiceDropdown";

function TextToSpeech() {
  return (
    <>
      <div className="flex flex-row items-center text-white z-10">
        <div className="container rounded-lg pb-10 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-sm">
          <div className="pb-8 pt-6 font-bold text-center">
            <h1 className="text-2xl">Text to Speech</h1>
          </div>

            <div className="px-8 text-center font-bold">
              <div className="grid grid-cols-3">
                <div></div>
                <div className="grid grid-cols-2 px-3">
                  <h2 className="col-span-2 text-xl">Pick a voice</h2>
                  <div className="col-span-2 mt-4"><VoiceDropdown /></div>
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
