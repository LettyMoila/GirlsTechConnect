import { useState, useEffect } from 'react'
import './App.css'
import rain from './assets/icons/rain.png'
import sunny from './assets/icons/sun.png'
import sunCloudy from './assets/icons/sunCloudy.png'
import thunder from './assets/icons/rainyThunder.png'

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
      {/*
       <div>
          <Weather weatherDescription = {data.weather ? data.weather[0].main : null} />
        </div> */}
      <section className='h-2/4 bg-blue2 rounded-3xl opacity-60 flex'>
      {data ? (
        
          <section className='flex w-full'>
            <div className='w-2/4 p-2'>
              <h2> {data.name}</h2>
              <img src={sunCloudy} className='h-32 w-32 translate-x-72'/>
              <p className='text-4xl'>{data.main.temp}°C</p>
              <p> {data.weather[0].description}</p>
            </div>
            <div className='w-2/4 p-2 grid grid-cols-2 '>
              <div>humidity <br></br> {data.main.humidity}%</div>
              <div>max temp <br/>{data.main.temp_max}°C</div>
              <div>min temp <br/> {data.main.temp_min}°C</div>
              <div>wind speed <br/> {data.wind.speed}km/h</div>
              <div>pressure <br/>{data.main.pressure} mb</div>
              <div>rain <br/> %</div>
            </div>
          </section>
           
      ) : (
        <p>Loading weather data...</p>
      )}
      </section>
      <section className='h-2/4 pt-3'>
        <div className='flex justify-between'>
        <h1 className='font-bold text-left'>Weekly</h1>
        <form className='rounded-2xl bg-blue3 h-10'>
          <input className='bg-none' placeholder='search location'/>
        </form>
        </div>
        <section className='flex h-60 p-4'>
        <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60'></div>
        </section>
      </section>
      
    </div>
  )
}

export default App
