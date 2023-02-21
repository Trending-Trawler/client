import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="px-10 py-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img
            src="/logo_trending_trawler.png"
            alt="Logo"
            height="49"
            width="54"
          />
          <h1 className="text-3xl font-bold pl-5">Trending Trawler</h1>
        </div>
        <nav className="">
          <Link className="mr-5" to={"/about"}>
            About
          </Link>
          <Link className="mr-5" to={"/signIn"}>
            Sign-In
          </Link>
          <Link className="mr-5" to={"/signUp"}>
            Sign-Up
          </Link>
        </nav>
      </div>
    </div>
  );
}

export { Navbar };
