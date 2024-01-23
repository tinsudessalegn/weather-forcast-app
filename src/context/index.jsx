import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const StateContext = createContext()

export const StateContextProvider = ({ children })=> {

    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Washington,DC,USA')
    const [thisLocation, setLocation] = useState('')

    // fetch data from api

    const fetchWeatherData = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: '0'
              },
              headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
              }
        }

        try {

            const res = await axios.request(options)
            console.log(res.data)
            const thisData = Object.values(res.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

        
        } catch (error) {
            console.error(error)
            alert('this place does not exist')
        }
    }

    useEffect(()=>{
        fetchWeatherData()
    }, [place])

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )

} 

export const useStateContext = () => useContext(StateContext)
