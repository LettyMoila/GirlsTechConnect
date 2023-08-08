import { useState, useEffect } from 'react'
import './App.css'
import weather from './components/Weather';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();

  // console.log(import.meta.env.VITE_API_URL)


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // console.log(import.meta.env.VITE_API_URL)
      fetch(`${import.meta.env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_MY_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      });
    }
    fetchData();
  }, [lat,long])
  console.log(data)
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
