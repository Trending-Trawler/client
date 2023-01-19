function Input({ label }: { label: string }) {
  return (
    <>
      <div className="mt-4">
        <p className="text-white text-xs drop-shadow-2xl">
          {label}
          <span className="text-red-500">*</span>
        </p>
        <input
          type="text"
          className=" w-80 mt-0.5 rounded border border-black drop-shadow-xl text-sm py-0.5 px-1"
        />
      </div>
    </>
  );
}

export { Input };
