console.log('Your code starts here 🙂');

/*
* Reminder. To show/hide currency detail modal:
*
* 1) Add/remove class "has-overlay" to the body tag.
* 2) Add/remove class "currencydetail--show" to tag article with class "currencydetail".
*
*/

//On load of page, clean to start search

import { cleanUpLoad, loadList } from './changer.js';

function initweb() {
    var app = new cleanUpLoad(document.querySelector('.results'));
};
initweb();

/*On load of page, call API to store currency list in the background

import { displayCurrencyList } from './api.js';

function initlist() {
    var list = new displayCurrencyList();
};

initlist();*/

//Upload new list


function initlist() {
    var app = new loadList(document.querySelector('.results'));
};
initlist();