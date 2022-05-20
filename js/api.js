
export { displayCurrencyList as displayCurrencyList, displayCurrencyDetails as displayCurrencyDetails };

// Information to reach API & obtain currency list
// Asynchronous function
class displayCurrencyList {
  currencies = [];
  constructor() {
     this.currencies = this.init();
  }
  async init() {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
    let response = await fetch(url);
    if (response.ok){
      const jsonResponse =  await response.json();
      let data = [];
      Object.keys(jsonResponse).forEach(key => {
        data.push({'code': key, 'value': jsonResponse[key]});
      })
      return data;
    }
  }
};
// Information to reach API & obtain currency Details
// Asynchronous function
class displayCurrencyDetails {
  currencieDetails = [];
  constructor(code) {
    this.code = code;
    this.currencieDetails = this.init();
  }
  async init() {
    let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';
    url = url + `${this.code}` + '.json';
    let response = await fetch(url);
    if (response.ok){
      const jsonResponse =  await response.json();
      let data = [];
      Object.keys(jsonResponse).forEach(key => {
        data.push({'code': key, 'value': jsonResponse[key]});
      })
      return data;
    }
  }
};