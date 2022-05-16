console.log('Your code starts here 🙂');

/*
* Reminder. To show/hide currency detail modal:
*
* 1) Add/remove class "has-overlay" to the body tag.
* 2) Add/remove class "currencydetail--show" to tag article with class "currencydetail".
*
*/

//On load of page, clean to start search
import { displayCurrencyList } from './api.js';
import { cleanUpLoad, loadList, increaselist } from './changer.js';

var app = new cleanUpLoad(document.querySelector('.results'));
var list = new loadList(app.listDom);

/*On load of page, call API to store currency list in the background */


async function initlist() {
    var list = new displayCurrencyList();
    console.info(list);
    return list.currencies;
};

const currencies = await  initlist();

var searchInput = document.getElementById("search");

searchInput.addEventListener('keyup', function(){
  
  var search = this.value;
    const filtercurrencies = extractCurrenciesFromSearch(search);
      // Clear the list
      var app = new cleanUpLoad(document.querySelector('.results'));
      //Add new list
      var newList = new loadList(app.listDom);



    // ESTO ES LO MISMO QUE EL CODIGO DE ABAJO, PERO MAS CUTRE

    // for (let index = 0; index < filtercurrencies.length; index++) {
    //     const element = filtercurrencies[index];
    //     app.listDom.getElementsByClassName('currencylist')[0].append(increaselist(element));

        
    // }

      filtercurrencies.forEach(element => {
          app.listDom.getElementsByClassName('currencylist')[0].append(increaselist(element));
      });

  
});


function extractCurrenciesFromSearch(query){
    return currencies.filter(currency => {
        return currency.code.toLowerCase().startsWith(query.toLowerCase()) || currency.value.toLowerCase().startsWith(query.toLowerCase()) ;
    });
    
}

//Upload new list


// function initlist() {
//     var app = new loadList(document.querySelector('.results'));
// };
// initlist();