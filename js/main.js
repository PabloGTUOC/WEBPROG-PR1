console.log('Your code starts here 🙂');

/*
* Reminder. To show/hide currency detail modal:
*
* 1) Add/remove class "has-overlay" to the body tag.
* 2) Add/remove class "currencydetail--show" to tag article with class "currencydetail".
*
*/

/* DISCLAIMER:
I was not capable to fully udnerstand point 1 & 2 above so I took several pieces of stack overflow codes to find something that somehow works. 
I do know is not the full assigment but I also got covid inbetween and thereby the best I could do in the time. I have seen many comments around cookies but I am neither understanding how to properly set those up.
*
*/

/* General variable to introduce results domain */

let resultdomin = document.querySelector('.results');
let removetitle = document.getElementsByClassName('results-title');

//On load of page, clean to start search
import { displayCurrencyList, displayCurrencyDetails } from './api.js';
import { cleanUpLoad, loadList, increaselist, updateTitle, updateDetailsModal } from './changer.js';
let app = new cleanUpLoad(resultdomin);
let list = new loadList(app.listDom);
let favs = [];

/*On load of page, call API to store currency list in the background */
async function initlist() {
    let list = new displayCurrencyList();
    return list.currencies;
};
// Api call to dowload the currency details
async function initDetails() {
    let details = new displayCurrencyDetails();
    return details.currencieDetails;
};
// Activation of the Api call to dowload the currency list
const currencies = await initlist();
let currencyValues = Object.values(currencies);


/*Once list is load, allow for search on the main site and update title of results */
var searchInput = document.getElementById("search");
let lookValue = searchInput.addEventListener('keyup', function () {
    let mainResult = document.getElementsByClassName('results')[0];
    mainResult.style.visibility = 'visible';
    var search = this.value;
    const filtercurrencies = extractCurrenciesFromSearch(search);
    // Clear the list
    var app = new cleanUpLoad(resultdomin);
    //Add new list
    var newList = new loadList(app.listDom);
    filtercurrencies?.forEach(element => {
        app.listDom.getElementsByClassName('currencylist')[0].append(increaselist(element));
    });
    if (filtercurrencies?.length > 0) {
        let newT = updateTitle(removetitle, "You can click for further details");
        resultdomin.getElementsByClassName('results__header')[0].appendChild(newT);
    } else {
        let newT = updateTitle(removetitle, "There is no matching results");
        resultdomin.getElementsByClassName('results__header')[0].appendChild(newT);
    }
});

//query along full list of currencies
function extractCurrenciesFromSearch(query) {
    if (query.length > 2) {
        return currencies.filter(currency => {
            return currency.code.toLowerCase().includes(query.toLowerCase()) || currency.value.toLowerCase().includes(query.toLowerCase());
        });
    }
};

/*Clean the results after typing a search */
let cleanSearch = document.getElementById("cleanB");
console.log(cleanSearch);
cleanSearch.addEventListener('click', function () {
    // Clear the list
    let app = new cleanUpLoad(resultdomin);
    // Clear the input box
    searchInput.value = "";
});

//Close results after detail click
const addOncloseClickeventDetails = () => {
    let closeLink = document.getElementsByClassName('js-currencydetail-close')[0];
    closeLink.addEventListener('click', function () {
        const unhidesection = document.getElementsByClassName('currencydetail')[0];
        unhidesection.style.transform = "translateX(100%)";
    });
};
// Shows favs and make results invisible, but only as display notice.
const addOnshowFavs = () => {
    //Closing previous favs
    const modalClose = document.getElementsByClassName('modal-button')[0];
    modalClose.addEventListener('click', function () {
        let modal = document.getElementById('modal');
        modal.close();
    });
    let favsLink = document.getElementById('js-favs');
    favsLink.addEventListener('click', function () {
        const listElements = document.getElementsByClassName('modal_currencylist__item');
        if (listElements.length > 0) {
            for (let i = 0; i <= listElements.length; i++) {
                listElements[i].parentNode.removeChild(listElements[i]);
            }
        }
        let modal = document.getElementById('modal');
        modal.showModal();
        favs.forEach(element => {
            updateDetailsModal(element);
        });
    });
};

// Add the selected currency to favs but not sure how to export to cookies
const addtoFavs = () => {
    let addFavs = document.getElementsByClassName('js-currencydetail-fav-label')[0];
    addFavs.addEventListener('click', function () {
        let item = document.getElementsByClassName('js-currencydetail-name')[0].textContent;
        favs.push(item);
        const alert = document.createElement('alert');
        alert.style.className = 'alert-favs';
        alert.innerHTML = 'Added to favs';
        alert.addEventListener('click', function () {
            alert.parentNode.removeChild(alert);
        });
        document.body.insertBefore(alert, document.body.firstChild);
    });
};

// Trying to export and read cookies
function setCookie(favs) {
    document.cookie = favs;
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)list\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue;
}

function readCookie(cookieValue) {
    favs.append(cookieValue.split(","));
}

addOnshowFavs();
addOncloseClickeventDetails();
addtoFavs();
setCookie ();
readCookie();