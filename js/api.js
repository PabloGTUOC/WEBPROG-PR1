// Information to reach API & obtain currency list

// Information to reach API

// Asynchronous function
export { displayCurrencyList as displayCurrencyList };

/*const displayCurrencyList = () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
  
  fetch(url, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      const jsonResponse =  response.json();
      console.log(jsonResponse[3]);
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    let entries = Object.entries(jsonResponse);  
    console.log(entries[3]);
    return entries;
})
}*/

class displayCurrencyList {

  constructor() {
      this.init();
  }
  init() {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
    fetch(url, {cache: 'no-cache'}).then(response => {
      if (response.ok) {
        const jsonResponse =  response.json();
        console.log(jsonResponse[3]);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then(jsonResponse => {
      let entries = Object.entries(jsonResponse);  
      console.log(entries[3]);
      return entries;
  })
  }
}