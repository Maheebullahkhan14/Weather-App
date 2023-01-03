import React, { useEffect, useState } from "react";

const Weatherapp = () => {
  const [CityData , setCityData] = useState(null)

  const [Search ,setSearch] = useState('Mumbai')

  useEffect(() =>{
    const FetchApi = async() =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=2809c302ee124bd7d797e3cf81d76f1f
      `

      const response = await fetch(url)
      const data = await response.json()
      setCityData(data.main)
    }
    FetchApi()
  },[Search])
    
  return (
    <>
      {!CityData ? (
        <div className="Box">
        <input type="text" 
        placeholder="Search City..."
        onChange={(e) => setSearch(e.target.value) }></input>
        <p>No Data found</p>
        </div>
      ): (
        
      <div className="Box">
        <input type="text" 
        placeholder="Search City..."
        onChange={(e) => setSearch(e.target.value) }></input>
        <h2>{Search}</h2>
        <h1>{CityData.temp}&#176;</h1>

        <h3>Min : {CityData.temp_min}&#176; | Max : {CityData.temp_max}&#176;</h3>
      </div>
      
      )

      }
      
    </>
  );
};

export default Weatherapp;
