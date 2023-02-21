function TextToSpeech() {
  return (
    <>
      <div className="flex flex-row items-center text-white">
        <div className="container rounded-lg pb-10 mx-auto backdrop-filter bg-slate-50/10 backdrop-blur-sm">
          <div className="pb-8 pt-6 font-bold text-center">
            <h1 className="text-2xl">Text to Speech</h1>
          </div>
          <div className="px-8 text-center font-bold">
            <div className="grid grid-cols-3">
              <div className="grid grid-cols-2 px-5">
                <h2 className="col-span-2 text-xl">Pick a voice</h2>
                <div className="pt-10 text-black text-sm">
                  <button className="bg-btn-orange rounded-full py-2 px-6 drop-shadow-xl">Voice 1</button>
                </div>
                <div className="pt-10 text-black text-sm">
                  <button className="bg-btn-orange rounded-full py-2 px-6 drop-shadow-xl">Voice 2</button>
                </div>
                <div className="pt-10 text-black text-sm">
                  <button className="bg-btn-orange rounded-full py-2 px-6 drop-shadow-xl">Voice 3</button>
                </div>
                <div className="pt-10 text-black text-sm">
                  <button className="bg-btn-orange rounded-full py-2 px-6 drop-shadow-xl">Voice 4</button>
                </div>
              </div>
              <div></div>
              <div>
                <h2 className="font-bold text-xl">Adjust reading speed</h2>
                <div className="pt-20">
                  <input type="range" step="1" /*value={readingSpeed}*/ />
                  <div className="grid grid-cols-2 text-sm">
                    <div>slow</div>
                    <div>fast</div>
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
