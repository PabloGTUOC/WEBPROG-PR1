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
let removetitle = document.getElementsByClassName('results-title');
//On load of page, clean to start search
import { displayCurrencyList, displayCurrencyDetails } from './api.js';
import { cleanUpLoad, loadList, increaselist, updateTitle, unHideDetails } from './changer.js';
let app = new cleanUpLoad(resultdomin);
let list = new loadList(app.listDom);
let favs = [];

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
let currencyValues = Object.values(currencies);
console.log(currencyValues);

/*Once list is load, allow for search on the main site and update title of results */
var searchInput = document.getElementById("search");
let lookValue = searchInput.addEventListener('keyup', function(){
  var search = this.value;
    const filtercurrencies = extractCurrenciesFromSearch(search);
    // Clear the list
    var app = new cleanUpLoad(resultdomin);
    //Add new list
    var newList = new loadList(app.listDom);
    /*filtercurrencies.forEach(element => {
        app.listDom.getElementsByClassName('currencylist')[0].append(increaselist(element));
    });*/
    let eachList = filtercurrencies?.forEach(element => {
        app.listDom.getElementsByClassName('currencylist')[0].append(increaselist(element));
    });
    if (eachList?.length > 0) {
        let newT = updateTitle(removetitle, "You can click for further details");
        resultdomin.getElementsByClassName('results__header')[0].appendChild(newT);
    } else {
        let newT = updateTitle(removetitle, "There is no matching results");
        resultdomin.getElementsByClassName('results__header')[0].appendChild(newT);
    }
    return eachList
});

console.log(lookValue);

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


const  addOncloseClickeventDetails = () => {
    let closeLink = document.getElementsByClassName('js-currencydetail-close')[0];
    closeLink.addEventListener('click', function(){
        const unhidesection = document.getElementsByClassName('currencydetail')[0];
        unhidesection.style.transform = "translateX(100%)";
  });
};

const  addOnshowFavs = () => {
    console.log('Show Favs');
    let favsLink = document.getElementById('js-favs');
    favsLink.addEventListener('click', function(){
        const favssection = document.getElementsByClassName('favs')[0];
        favssection.style.transform = "translateX(0%)";
  });
};

const  addOncloseClickeventFavs = () => {
    let closeLinkfavs = document.getElementsByClassName('js-favs-close')[0];
    closeLinkfavs.addEventListener('click', function(){
        const favssection = document.getElementsByClassName('favs')[0];
        favssection.style.transform = "translateX(100%)";
  });
};

addOnshowFavs ();
addOncloseClickeventDetails();
addOncloseClickeventFavs ();



/*Call the API for details on the clicked code */
//const currencieDetails = await initDetails(clickDetails);

// if (currencieDetails) {
//     let showDetails = new unHideDetails(resultdomin);
// };
