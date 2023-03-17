import VoiceDropdown from "./VoiceDropdown";
import VoicePreview from "./VoicePreview";

function TextToSpeech() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute bottom-0 left-0 w-96 h-60 rounded-tl-full rounded-bl-full bg-yellow-400 bg-opacity-30 blur-own2 z-0"></div>
        <div className="flex flex-row items-center text-white z-0">
          <div className="container rounded-lg pb-5 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-sm z-20">
            <div className="pb-8 pt-6 font-bold text-center">
              <h1 className="text-2xl">Text to Speech</h1>
            </div>

            <div className="px-8 text-center font-bold">
              <div className="grid grid-cols-3">
                <div></div>
                <div className="grid grid-cols-2 px-3">
                  <h2 className="col-span-2 text-xl">Pick a voice</h2>
                  <div className="col-span-2 mt-4"><VoiceDropdown /></div>
                  <div className="col-span-2 mt-4"><VoicePreview /></div>
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
