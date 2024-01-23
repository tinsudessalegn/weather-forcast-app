import { useState } from "react"
import search from './assets/icons/search.svg'
import { BackgroundLayout, WeatherCard } from './components'
import { useStateContext } from "./context"

function App() {
  const [city, setCity] = useState('')
  const {weather,  thisLocation, values, place, setPlace} = useStateContext()

  // console.log(weather)
  const submitCity = ()=> {
    setCity('')
  }
  return (
    <>
      <div className='w-full h-screen text-white px-8'>
        <nav className='w-full p-3 flex justify-between items-center'>
          <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
          <h3 className='font-bold tracking-wide text-xl'> Favorite Cities</h3>

          <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input  onKeyUp={(e)=> {
                    if(e.key === 'Enter'){
                      submitCity()
                    }
                  }}    
                  placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={city}
                  onChange={e => setCity(e.target.value)}/>
          </div>
        </nav>
        <BackgroundLayout/>
        <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        </main>
      </div>
    </>
  )
}

export default App
