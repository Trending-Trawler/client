import React from "react";
import { useEffect, useState } from "react";
import Data from "../assets/voices.json";

function maleVoices() {
  return (
    <div>
      {
        Data.map(post => {
          return(
            <div className="text-center">
              <select>
              {post.male.map(data => (
                data.voices.map(voi => (
                <option className="text-lg font-bold text-center mt-10" value={voi.name}>
                  {voi.name}
                </option>
                ))
              ))}
              </select>
            </div> 
          )
          })
      }            
    </div>
  );
}

function femaleVoices() {
  return (
    <div>
      {
        Data.map(post => {
          return(
            <div className="text-center">
              <select>
              {post.female.map(data => (
                <option className="text-lg font-bold text-center mt-10" value={data.lang}>
                  {data.lang}
                </option>
              ))}
              </select>
            </div> 
          )
          })
      }            
    </div>
  );
}

function disneyVoices() {
  return (
    <div>
      {
        Data.map(post => {
          return(
            <div className="text-center">
              <select>
              {post.disney.map(data => (
                <option className="text-lg font-bold text-center mt-10" value={data.name}>
                  {data.name}
                </option>
              ))}
              </select>
            </div> 
          )
          })
      }            
    </div>
  );
}


function TextToSpeech() {
  const [readingSpeed, setReadingSpeed] = useState<string>("50");
  const [todos, setTodos] = useState([]);
  const [language, setLanguage] = useState<string>("English");
  const [voices, setVoices] = useState(maleVoices());
  


  // Interfaces
  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

  interface Voice {
    lang: string;
  }

  interface Voices {
    random: string;
    male: Voice[];
    female: Voice[];
    disney: object;
  }

  // todos fetching
  /*useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => setTodos(res.slice(0,10)))
    .catch(err => console.log(err))

    console.log("Voice: ", todos);
  }, [])*/


  useEffect(() => {
    fetch('https://api.trending-trawler.com/voices', {
      mode: "no-cors"
    })
    .then(response => response.json())
    .then(res => console.log("Output: ", res.json()))
    //.catch(err => console.log(err))
  }, [])


  // async function
  /*
  async function postData(url) {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response;
  }
  console.log(postData('https://api.trending-trawler.com/voices'));
  */


  // todos mapping
  /*<div>
        {
          todos.map((todo:Todo) => {
            return(
              <div>
                {todo.title}
              </div>
            )
            })
        }
      </div>*/

  return (
    <div>
      
      <div className="flex flex-row items-center text-white mt-2">
        <div className="container rounded-lg pb-10 sm:mx-auto mx-3 backdrop-filter bg-slate-50/10 backdrop-blur-sm">
          <div className="pb-6 pt-6 font-bold text-center">
            <h1 className="text-4xl">Text to Speech</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-center">Pick a Voice</h1>
            <div className="flex flex-row pt-2">
              <div className="flex-auto text-left ml-4 sm:ml-16 lg:ml-20 xl:ml-64 2xl:ml-80">
                <button onClick={(e) => setVoices(maleVoices())} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">Male</div></button>
              </div>
              <div className="flex-auto text-center">
                <button onClick={(e) => setVoices(femaleVoices())} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">Female</div></button>
              </div>
              <div className="flex-auto text-right mr-4 sm:mr-16 lg:mr-20 xl:mr-64 2xl:mr-80">
                <button onClick={(e) => setVoices(disneyVoices())} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">Disney</div></button>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center mt-10">Pick a Language</h1>
            <div className="flex flex-row pt-2">
              <div className="flex-auto text-left ml-4 sm:ml-16 lg:ml-20 xl:ml-64 2xl:ml-80">
                <button onClick={(e) => setLanguage("English")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">English</div></button>
              </div>
              <div className="flex-auto text-center">
                <button onClick={(e) => setLanguage("German")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">German</div></button>
              </div>
              <div className="flex-auto text-right mr-4 sm:mr-16 lg:mr-20 xl:mr-64 2xl:mr-80">
                <button onClick={(e) => setLanguage("French")} className="lg:w-52 sm:w-36 w-24 h-12 hover:bg-slate-500/40 active:bg-slate-500/40 bg-slate-50/40 border-white border-2 rounded-xl py-2 xl:px-4 px-2 drop-shadow-xl"><div className="text-base font-bold">French</div></button>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-sm font-semibold text-center">Selected: <div className="text-lg font-bold italic">{language}</div></h1>
            </div>
            <h1 className="text-2xl font-bold text-center mt-10">Adjust reading speed</h1>
            <div className="flex flex-row pt-2">
              <div className="flex-auto text-center">                
                <input type="range" step="1" value={readingSpeed} onChange={(e) => setReadingSpeed(e.target.value)}/>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-sm font-semibold text-center">Selected: <div className="text-lg font-bold italic">{readingSpeed}</div></h1>
            </div>

            <h1 className="text-2xl font-bold text-center mt-10">Voices</h1>
            <div>
              {voices}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TextToSpeech };
