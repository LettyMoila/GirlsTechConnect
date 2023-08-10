import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  const [data, setData] = useState();

  // console.log(import.meta.env.VITE_API_URL)


  useEffect(() => {
    const fetchData = async () => {
      let long = "";
      let lat = "";

      navigator.geolocation.getCurrentPosition(async function(position) {

        long = position.coords.longitude
        lat = position.coords.latitude
        fetch(`${import.meta.env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        console.log(result)
      }).catch(error => {
        console.error("Error fetching weather data:", error);
      });
        
      });

      console.log({long})
      
    }
    fetchData();
  }, [])
  console.log(data)
  return (
    <div className='h-screen bg-[url("./assets/autumn.jpg")] bg-cover bg-no-repeat p-6'>
      <section className='h-80 bg-blue2 rounded-3xl opacity-60 flex'>
      {data ? (
        
          <section className='flex w-full'>
            <div className='w-2/4'>
              <h2> {data.name}</h2>
              <p> {data.weather[0].icon}</p>
              <p>{data.main.temp}°C</p>
              <p> {data.weather[0].description}</p>
            </div>
            <div className='w-2/4'>
            <p>humidity: {data.main.humidity}</p>
            <p>max: {data.main.temp_max}</p>
            <p>min: {data.main.temp_min}</p>
            <p>wind speed: {data.wind.speed}</p>
            </div>
          </section>
           
      ) : (
        <p>Loading weather data...</p>
      )}
      </section>
      <section className='h-80 pt-3'>
        <h1 className='font-bold text-left'>Days</h1>
        <section className='grid-cols-7 h-44 p-4'>
        <div className='bg-blue3 h-32 w-24 rounded-3xl opacity-60'></div>
        </section>
      </section>
      
    </div>
  )
}

export default App
