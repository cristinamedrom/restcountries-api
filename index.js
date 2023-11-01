const cardTemplate = function (infoCountries) {
  const { name, flags } = infoCountries;

  if (flags) {

    const pngFlag = flags[0]?.png || '';
  }

  return `<div class="card">
              <img id="flag-image" src=" ${pngFlag} " alt=" ${name.common} " />
              <h1 class="center">${name.coomon}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()

    if (!response.ok) {
      throw new Error('Error al realizar la solicitud')
    }
    return response.json()

  })

  .then(function (countries) {
    // Here is where you'll need to add into the DOM all the countries received from API 

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
    
  });