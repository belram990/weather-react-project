import React from "react";



import "./Weather.css";

export default function Temperature() {
  
    return(
           <div>
          Saturday 10:20, few clouds
    <br />
    Humidity: <strong>84%</strong>, Wind: <strong>2.5km/h</strong>

                <section  className="currentTemp"> 
                    <span className="icon">☁️ </span>
                    <span className="temperature">31</span>
                    <span className="unit">°F</span>       
                </section>
             </div>
    );



}
