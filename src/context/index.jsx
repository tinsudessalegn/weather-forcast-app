import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const stateContext = createContext()

export const stateContextProvider = ({children})=> {

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
    }

} 

