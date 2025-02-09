import React, { useState } from "react";
import Temperature from "./Temperature";



import "./App.css";
import "./Weather.css";


export default function Search (){
let [city, setCity] = useState("");
let [showCity, setShowCity]= useState("");

function search(event){
    event.preventDefault();
    setShowCity(city);
}

function updateCity(event) {
    setCity(event.target.value);
}

    return(
        <div>
            <main className="weather-Search">
            <form onSubmit={search}>
                <input className="search-input"
                type="search"
                placeholder="Enter a City..."
                onChange={updateCity}
                />
                <input className="search-button"
                type="submit"
                value="Search" />
            </form>
</main>
            
            <h1>{showCity}</h1>
<Temperature value="31" />

         <section className="forcast"> 
            <p>  
          <span>Sat </span>
          <br />
          <span>🌨️ </span>
          <br />
          <span>
            <strong> 15°</strong>
            9°
          </span>
        </p>  
           <p>  
            <span>Sun</span>
           <br />
           <span>☁️</span>
           <br />
          <span>
            <strong> 15°</strong>
            9°
          </span>
        </p>  

           <p>  
          <span>Mon</span> 
          <br />
          <span>🌤️</span>
          <br />
          <span>
            <strong> 15°</strong>
            9°
          </span>
        </p>  

           <p>  
          <span>Tue</span>
           <br />
          <span>☀️</span>
          <br />
          <span>
            <strong> 15°</strong>
            9°
          </span>
        </p>  

           <p>  
            <span>Wed</span>
           <br />
           <span>🌧️</span>
          <br />
          <span>
            <strong> 15°</strong>
            9°
          </span>
        </p>  
              </section>
                </div>
      
 
    );
}