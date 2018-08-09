import React from 'react';

// const toQueryString = (obj) => {
//   const parts = [];
//   for (let i in obj) {
//       if (obj.hasOwnProperty(i)) {
//           parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
//       }
//   }
//   return parts.join('&');
// }

export default class Weather extends React.Component {
  constructor(params) {
    super(params);
    this.state = { weather: null };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += `lat=${params.lat}&lon=${params.lon}`;
    // url += toQueryString(params);
    url += '&units=imperial';
    const apiKey = 'ddc24d76d3dac355473d5fb9713d20cf';
    url += `&APPID=${apiKey}`;

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  render () {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp);
      content = <div>
                  <p>
                    <span>{weather.name}</span>
                    <span>{temp.toFixed(1)}°F</span>
                  </p>
                </div>
    } else {
      content = <div className='loading'>Loading weather...</div>;
    }

    return (
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          <div className='weather-background'>
            {content}
          </div>
        </div>
      </div>
    );
  }


}
