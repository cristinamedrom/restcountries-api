const cardTemplate = function (infoCountries) {
  const { name, flags } = infoCountries;

  if (flags) {
    const flagImg = flags[0]?.png || '';
    return `
      <div class="card">
        <img id="flag-image" src="${flagImg}" alt="${name.common}" />
        <h1 class="center">${name.common}</h1>
      </div>
    `;
  } else {
    return '';
  }
};

const countriesNode = document.getElementById("countries");

const continentSelect = document.getElementById("continent-select");
continentSelect.addEventListener("change", function () {
  const selectedContinent = continentSelect.value;

  const apiUrl = `https://restcountries.com/v3.1/region/${selectedContinent}`;

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Error al realizar la solicitud');
      }
      return response.json();
    })
    .then(function (countries) {

      countriesNode.innerHTML = "";

      countries.forEach(function (infoCountries) {
        const detallesCountry = cardTemplate(infoCountries);
        countriesNode.innerHTML += detallesCountry;
      });
    })
    .catch(function (error) {
      console.error('Error al obtener los datos');
    });
});

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()

    if (!response.ok) {
      throw new Error('Error al realizar la solicitud');
    }
    return response.json();
  })
  .then(function (countries) {
    // Here is where you'll need to add into the DOM all the countries received from API 
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements

    countries.forEach(function (infoCountries) {
      const detallesCountry = cardTemplate(infoCountries);
      countriesNode.innerHTML += detallesCountry;
    });
  })
  .catch(function (error) {
    console.error('Error al obtener los datos');
  });
