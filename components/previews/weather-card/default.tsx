"use client";

import { WeatherCard } from "@/registry/new-york/ui/weather-card";

const sampleWeatherData = {
	coord: {
		lon: -122.4194,
		lat: 37.7749,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01d",
		},
	],
	main: {
		temp: 22,
		feels_like: 21,
		temp_min: 18,
		temp_max: 25,
		pressure: 1013,
		humidity: 60,
	},
	visibility: 10000,
	wind: {
		speed: 3.5,
		deg: 180,
	},
	dt: 1699641600,
	sys: {
		country: "US",
		sunrise: 1699622400,
		sunset: 1699660800,
	},
	timezone: -28800,
	name: "San Francisco",
	location: {
		city: "San Francisco",
		country: "United States",
		region: "California",
	},
};

export default function WeatherCardDefault() {
	return (
		<div className="flex justify-center">
			<WeatherCard weatherData={sampleWeatherData} />
		</div>
	);
}
