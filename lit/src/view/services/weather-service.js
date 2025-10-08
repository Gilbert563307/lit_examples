class WeatherService {
    constructor() {

    }


    async getDataFromApi(cityName) {
        const key = "";
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=no`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
        // this.temperature = data.current.temp_c;
        // this.weatherDescription = `Het voelt aan als ${data.current.feelslike_c}`;
        // console.log(data)
    }
}

export const weatherService = new WeatherService();
export { weatherService };