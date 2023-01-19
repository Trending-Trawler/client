function Header() {
  return (
    <>
      <div className="w-screen">
        <div className="flex justify-center pt-5 px-5">
          <div className="absolute flex-1">
            <h1 className="text-4xl text-center font-bold text-white drop-shadow-lg">
              Trend Trawler
            </h1>
          </div>
          <div className="text-right flex-1">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
