import mc from "../assets/minecraft.png";
import reddit from "../assets/reddit.png";

function Preview() {
  return (
    <>
      <div className="mt-5 aspect-[9/16] h-2/6 mx-auto drop-shadow-2xl">
        <img src={mc} alt="" className="rounded object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-3">
          <img src={reddit} alt="secondImage" className="" />
        </div>
      </div>
    </>
  );
}

export { Preview };
