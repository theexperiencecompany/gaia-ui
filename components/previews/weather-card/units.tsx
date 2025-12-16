"use client";

import { WeatherCard } from "@/registry/new-york/ui/weather-card";

const sampleWeatherData = {
	coord: { lon: 2.3522, lat: 48.8566 },
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01d",
		},
	],
	main: {
		temp: 20,
		feels_like: 19,
		temp_min: 18,
		temp_max: 22,
		pressure: 1013,
		humidity: 65,
	},
	visibility: 10000,
	wind: {
		speed: 3.0,
		deg: 180,
	},
	dt: 1699641600,
	sys: {
		country: "FR",
		sunrise: 1699600800,
		sunset: 1699636800,
	},
	timezone: 3600,
	name: "Paris",
	location: {
		city: "Paris",
		country: "France",
		region: "Île-de-France",
	},
};

export default function WeatherCardUnits() {
	return (
		<div className="flex flex-wrap items-start justify-center gap-6">
			<WeatherCard
				weatherData={sampleWeatherData}
				defaultUnit="celsius"
				showForecast={false}
				showDetails={false}
			/>
			<WeatherCard
				weatherData={sampleWeatherData}
				defaultUnit="fahrenheit"
				showForecast={false}
				showDetails={false}
			/>
		</div>
	);
}
