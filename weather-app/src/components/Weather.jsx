import React from 'react'

const Weather = ({weatherData }) => {
    console.log(weatherData);
  return (
    <div>
        {weatherData.weather ? (
        <div className=' w-[450px] h-[300px] bg-gray-200 shadow-lg rounded-xl m-auto relative px-6 top-[10%] border-slate-500'>
            <div className="flex justify-between w-full">
                <div className=' w-1/2 my-4 mx-auto flex justify-between items-center'>
                    <div className='flex flex-col items-start h-full'>
                        <div>
                            <p className='text-xl'>
                                {weatherData.name}
                                {weatherData.sys.country}
                            </p>
                            <p className='text-xl'>
                                {weatherData.weather[0].description} 
                            </p>
                        </div>
                        <div>
                            <h1 className=' text-7xl font-semibold pt-32'>
                                {weatherData.main.temp.toFixed()} °C
                            </h1>
                        </div>
                    </div>
                </div>

                <div className=' w-1/2 flex flex-col justify-between items-end'>
                    <div className="relative">
                        <img 
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                        alt="" 
                        className=' w-[140px]' />
                    </div>
                    {weatherData !== undefined ? (
                        <div className='flex flex-col justify-evenly gap-y-1 my-4 mx-auto text-xs'>
                            <div className="flex justify-between gap-x-6">
                                <p>Feels like</p>
                                <p className=' font-bold w-20'>
                                    {weatherData.main.feels_like.toFixed()} °C
                                </p>
                            </div>
                            <div className="flex justify-between gap-x-6">
                                <p>Pressure</p>
                                <p className=' font-bold w-20'>
                                    {weatherData.main.humidity} %
                                </p>
                            </div>
                            <div className="flex justify-between gap-x-6">
                                <p>Humidity</p>
                                <p className=' font-bold w-20'>
                                    {weatherData.main.pressure} hPa
                                </p>
                            </div>
                            <div className="flex justify-between gap-x-6">
                                <p>Wind Speed</p>
                                <p className=' font-bold w-20'>
                                    {weatherData.wind.speed} Km/h
                                </p>
                            </div>
                        </div>
                    ):null}
                </div>
            </div>
        </div>
        ):null}
    </div>
  )
}

export default Weather
