import React, { useEffect, useState } from "react";
import axios from "axios";

function StrombergQuotes() {
  const url = "https://www.stromberg-api.de/api/quotes/random";
  const [quote, setQuote] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setQuote(response.data.quote);
      setName(response.data.character.name);
    });
  }, [url]);

  return (
    <div className="mx-auto pt-5 w-1/2 flex flex-col justify-center text-white font-semibold">
      <h1 className="flex-1 text-center">"{quote}"</h1>
      <h2 className="pt-1 flex-1 text-center mb-10">-{name}</h2>
    </div>
  );
}

export { StrombergQuotes };
