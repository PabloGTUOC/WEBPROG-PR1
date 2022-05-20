console.log('Your code starts here 🙂');

/*
* Reminder. To show/hide currency detail modal:
*
* 1) Add/remove class "has-overlay" to the body tag.
* 2) Add/remove class "currencydetail--show" to tag article with class "currencydetail".
*
*/

/* General variable to introduce results domain */

let resultdomin = document.querySelector('.results');

//On load of page, clean to start search
import { displayCurrencyList, displayCurrencyDetails } from './api.js';
import { cleanUpLoad, loadList, increaselist, updateTitle, unHideDetails } from './changer.js';

let app = new cleanUpLoad(resultdomin);
let list = new loadList(app.listDom);

/*On load of page, call API to store currency list in the background */

async function initlist() {
    let list = new displayCurrencyList();
    return list.currencies;
};

async function initDetails() {
    let details = new displayCurrencyDetails();
    return details.currencieDetails;
};

const currencies = await initlist();

/*Once list is load, allow for search on the main site and update title of results */
var searchInput = document.getElementById("search");
searchInput.addEventListener('keyup', function(){
  var search = this.value;
    const filtercurrencies = extractCurrenciesFromSearch(search);
    let filterArray = Array.from(filtercurrencies);
      // Clear the list
      var app = new cleanUpLoad(resultdomin);
      //Add new list
      var newList = new loadList(app.listDom);
      filterArray.forEach(element => {
        app.listDom.getElementsByClassName('currencylist')[0].append(increaselist(element));
    });
});

const currencieDetails = await initDetails(clickDetails);


if (app.listDom.getElementsByClassName('currencylist')[0]) {
    let newT = updateTitle(removetitle, "You can click for further details");
    resultdomin.getElementsByClassName('results__header')[0].appendChild(newT);
} else {
    let newT = updateTitle(removetitle, "There is no matching results");
    resultdomin.getElementsByClassName('results__header')[0].appendChild(newT);
}


function extractCurrenciesFromSearch(query){
    if (query.length > 2) {
        return currencies.filter(currency => {
            return currency.code.toLowerCase().includes(query.toLowerCase()) || currency.value.toLowerCase().includes(query.toLowerCase()) ;
        });      
    }
};

/*Clean the results after typing a search */
let cleanSearch = document.getElementById("cleanB");
console.log(cleanSearch);
cleanSearch.addEventListener('click', function(){
      // Clear the list
      let app = new cleanUpLoad(resultdomin);
      // Clear the input box
      searchInput.value = "";
});

if (currencieDetails) {
    let showDetails = new unHideDetails(resultdomin);
}
