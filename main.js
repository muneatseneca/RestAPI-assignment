console.log( 'test this' ); 

async function getAstroDetails(city) {

  const url = `https://api.weatherapi.com/v1/astronomy.json?key=3551f4f3ffab41d6800230644260402&q=${city}`;

  const response = await fetch(url);
  const jsonResponse = await response.json();

  if (!response.ok) {
    console.log("API Error:", jsonResponse);
    return "";
  }

  const astro = jsonResponse.astronomy.astro;

  return `
    <div class="city-card">
      <h2>${jsonResponse.location.name}</h2>

      <div class="astro-card">
        <h4>Local time</h4>
        <p>${jsonResponse.location.localtime}</p>
      </div>

      <div class="astro-card">
        <h4>Sunrise</h4>
        <p>${astro.sunrise}</p>
      </div>

      <div class="astro-card">
        <h4>Sunset</h4>
        <p>${astro.sunset}</p>
      </div>

      <div class="astro-card">
        <h4>Moonrise</h4>
        <p>${astro.moonrise}</p>
      </div>

      <div class="astro-card">
        <h4>Moonset</h4>
        <p>${astro.moonset}</p>
      </div>

      <div class="astro-card">
        <h4>Moon Phase</h4>
        <p>${astro.moon_phase}</p>
      </div>

      <div class="astro-card">
        <h4>Illumination</h4>
        <p>${astro.moon_illumination}%</p>
      </div>

    </div>
  `;
}

async function loadCities() {

  const placeholder = document.querySelector("#weather-info-placeholder");

  const cityOne = await getAstroDetails("Toronto");
  const cityTwo = await getAstroDetails("Tokyo");

  placeholder.innerHTML = `
    <div class="cities-container">
      ${cityOne}
      ${cityTwo}
    </div>
  `;
}
//   const url = `https://api.weatherapi.com/v1/astronomy.json?key=3551f4f3ffab41d6800230644260402&q=${city}`;
loadCities();

// getWeatherDetails()