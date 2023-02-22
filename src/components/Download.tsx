function Download() {
    return (
            <div className="container pb-10 mx-auto">
                <div className="pt-10 text-white text-sm flex justify-center font-bold text-xl">
                    <button className="bg-slate-50/40 border-white border-2 rounded-xl py-2 px-6 drop-shadow-xl">
                    <svg className="inline pr-2 fill-white" width="40" data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"/></svg>
                    Download</button>
                </div>
            </div>
    );
}

export { Download };