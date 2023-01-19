import { Input } from "./Input";
import { DownloadBtn } from "./DownloadBtn";

function Properties() {
  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center">
        <Input label={"thread url"} />
        <Input label={"background url"} />
      </div>
      <div className="mt-5">
        <DownloadBtn />
      </div>
    </>
  );
}

export { Properties };
