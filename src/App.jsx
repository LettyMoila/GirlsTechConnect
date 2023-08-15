import { useState, useEffect } from 'react'
import './App.css'
import rain from './assets/icons/rain.png'
import sunny from './assets/icons/sun.png'
import star from './assets/icons/star.png'
import sunCloudy from './assets/icons/sunCloudy.png'
import thunder from './assets/icons/rainyThunder.png'

function App() {
  const [data, setData] = useState();


  useEffect(() => {
    const fetchData = async () => {
      let long = "";
      let lat = "";
      var forecastEl = document.getElementsByClassName("forecast");
      
      navigator.geolocation.getCurrentPosition(async function(position) {

        long = position.coords.longitude
        lat = position.coords.latitude

        fetch(`${import.meta.env.VITE_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
        }).catch(error => {
          console.error("Error fetching weather data:", error);
        });
        
      });
      
    }
    fetchData();
  }, [])
  console.log(data)

  return (
    
  
     <div className='h-screen  bg-[url("./assets/summer.jpg")] bg-cover bg-no-repeat p-6'>
       {data ? (
      <div className='overall h-full w-full'>
       <section className='h-2/4 bg-blue2 rounded-3xl opacity-60 flex'>
     
        
           <section className='flex w-full'>
             <div className='w-2/4 p-2 grid justify-center'>
               <h2> {data.city.name}</h2>
               <img src={sunny} className='h-32 w-32'/>
               <p className='text-4xl'>{data.list[0].main.temp}°C</p>
               <p> {data.list[0].weather[0].description}</p>
             </div>
             <div className='w-2/4 p-2 grid grid-cols-2 '>
               <div>humidity <br></br> {data.list[0].main.humidity}%</div>
               <div>max temp <br/>{data.list[0].main.temp_max}°C</div>
               <div>min temp <br/> {data.list[0].main.temp_min}°C</div>
               <div>wind speed <br/> {data.list[0].wind.speed}km/h</div>
               <div>pressure <br/>{data.list[0].main.pressure} mb</div>
               <div>rain <br/> %</div>
             </div>
           </section>
          
           
      
       </section>
       <section className='h-2/4 pt-3'>
         <div className='flex justify-between'>
         <h1 className='font-bold text-left'>Forecast</h1>
         <form className=' h-10'>
           <input className='bg-none bg-blue3 rounded-2xl opacity-60' placeholder='search location'/>

         </form>
         </div>
         <section className='flex gap-2 h-60 p-4'>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
            {/*data.list.map(days, index)=>(
              <p key={index}>{days}</p>
            )*/}
             <section>{data.list[1].dt_txt}</section>
             <section className='grid justify-center'><img src={sunny} className='h-24 w-24'/></section>
             <section>{data.list[1].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[2].dt_txt}</section>
             <section className='grid justify-center'><img src={sunny} className='h-24 w-24'/></section>
             <section>{data.list[2].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[3].dt_txt}</section>
             <section className='grid justify-center'><img src={star} className='h-24 w-24'/></section>
             <section>{data.list[3].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[4].dt_txt}</section>
             <section className='grid justify-center'><img src={star} className='h-24 w-24'/></section>
             <section>{data.list[4].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[5].dt_txt}</section>
             <section className='grid justify-center'><img src={star} className='h-24 w-24'/></section>
             <section>{data.list[5].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[6].dt_txt}</section>
             <section className='grid justify-center'><img src={sunny} className='h-24 w-24'/></section>
             <section>{data.list[6].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[7].dt_txt}</section>
             <section className='grid justify-center'><img src={sunny} className='h-24 w-24'/></section>
             <section>{data.list[7].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[8].dt_txt}</section>
             <section className='grid justify-center'><img src={sunny} className='h-24 w-24'/></section>
             <section>{data.list[8].main.temp}°C</section>
           </div>
           <div className='bg-blue3 h-full w-36 rounded-3xl opacity-60 grid'>
             <section>{data.list[9].dt_txt}</section>
             <section className='grid justify-center'><img src={sunny} className='h-24 w-24'/></section>
             <section>{data.list[9].main.temp}°C</section>
           </div>
         </section>
       </section>
       </div>
       ) : (
         <p>Loading weather data...</p>
      )}
     </div>
   )
}

export default App
