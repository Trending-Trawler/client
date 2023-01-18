import mc from '../assets/minecraft.png'
import reddit from '../assets/reddit.png'

function Header() {
    return (
        <>
                <div className="w-screen mx-auto">
                    <div className="flex items-center justify-between pt-5 px-5">
                        <h1 className="text-4xl text-center font-bold text-white drop-shadow-lg mx-auto">Trend Trawler</h1>
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                                 stroke="white"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="feather feather-align-justify">
                            <line x1="21" y1="10" x2="3" y2="10"></line>
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="21" y1="14" x2="3" y2="14"></line>
                            <line x1="21" y1="18" x2="3" y2="18"></line>
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="relative mt-5 aspect-[9/16] h-1/2 mx-auto drop-shadow-2xl">
                    <img src={mc} alt="" className="rounded object-cover"/>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-3">
                        <img src={reddit} alt="secondImage" className="" />
                    </div>
                </div>
        </>
    )
}

export { Header }