import { Input } from "./Input";

function Properties() {
  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center">
        <Input label={"thread url"} />
        <Input label={"background url"} />
      </div>
    </>
  );
}

export { Properties };
