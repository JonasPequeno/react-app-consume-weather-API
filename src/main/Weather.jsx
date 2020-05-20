import React, { useState, useEffect, Fragment } from 'react';
import './Weather.css'
import Information from '../components/Information';
import Image from '../components/Image';
import Api from "../services/Api";

export default () => {

    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        Api.getWeather(lat, long)
            .then(res => {
                console.log(res.data)
                setWeather(res.data);
            })
            .catch(err => {
                return (
                    <Fragment>
                        <h3>Deu ruim aqui :(</h3>
                    </Fragment>
                )
            })
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    if (location === false) {
        return (
            <Fragment>
                <h3>Por favor, ative sua localização para que o app posso funcionar :)</h3>
            </Fragment>
        )
    } else if (weather === false) {
        return (
            <Fragment>
                <h2>Carregando informações...aguarde!</h2>
            </Fragment>
        )
    }
    else {
        return (
            <div className="content" >
                <h2>O clima de <span>{weather['name']}</span> </h2>
                <h3>{weather['weather'][0]['description']}</h3>
                <hr />
                <div className="result">
                    <Image name="wind" />
                    <Information value={weather['wind']['speed']} label="Ventos" medida="km/h" />
                </div>
                <div className="result">
                    <Image name="celsius" />
                    <Information value={weather['main']['temp']} label="Temperatura atual" medida="°" />
                </div>
                <div className="result">
                    <Image name="temp_max" />
                    <Information value={weather['main']['temp_max']} label="Temperatura máxima" medida="°" />
                </div>
                <div className="result">
                    <Image name="tem_min" />
                    <Information value={weather['main']['temp_min']} label="Temperatura mínima" medida="°" />
                </div>
                <div className="result">
                    <Image name="pressure" />
                    <Information value={weather['main']['pressure']} label="Pressão do ar" medida="hPa" />
                </div>
                <div className="result">
                    <Image name="moisture" />
                    <Information value={weather['main']['humidity']} label="Umidade relativa" medida="%" />
                </div>
            </div>
        )
    }
}