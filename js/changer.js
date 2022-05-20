// Cleans the website at load

export { cleanUpLoad, loadList, increaselist, updateTitle, unHideDetails };


/* Define a function to clean the original title */
function updateTitle (removetitle, newText) {
    Array.from(removetitle).forEach(item => item.remove());
    let newTitle = document.createElement("H2");
    newTitle.classList.add('results-title'); 
    newTitle.innerHTML = newText;
    return newTitle;
}

/* Define a class to clean the original html */
class cleanUpLoad {
    constructor(ref) {
        this.listDom = ref;
        this.init();
    }
    init() {
        // delete original content on search title and add general statement
        let removetitle = this.listDom.getElementsByClassName('results-title');
        let newTitle = updateTitle(removetitle, "Please input at least 3 characters for search");
        this.listDom.getElementsByClassName('results__header')[0].appendChild(newTitle);
        // delete original content on Currency
        let removeitems = this.listDom.getElementsByClassName('currencylist__item');
        removeitems = Array.from(removeitems);
        for (let i = 1; i < removeitems.length;i++) {
                removeitems[i].remove();  
        }
    }
}


/* Define a class to load the list as return of a search */
class loadList {
    constructor(ref) {
        this.listDom = ref;
        this.init();
    }
    init() {
        // Create list elements
        let list = [];
        let newList = this.listDom.getElementsByClassName('currencylist__item');
        newList = Array.from(newList);
        for (let i = 0; i < list.length;i++) {
            let itemli = increaselist(list[i]);  
            //console.log(itemli);
            newList.push(itemli);
        }
    }
}

/* Function to create a new item li block per currency */
function increaselist ({ code, value }) {
    const newLi = document.createElement("li");
    newLi.className = "currencylist__item";
    const newSpan1 = document.createElement("span");
    newSpan1.className = "currencylist__item-code";
    newSpan1.append(code);
    newLi.append(newSpan1);
    const newSpan2 = document.createElement("span");
    newSpan2.className = "currencylist__item-name";
    newSpan2.addEventListener('click', function(){
            let clickDetails = code;
            return clickDetails;
    });
    const newa1 = document.createElement("a");
    newa1.className = "link";
    newa1.append(value);
    newSpan2.append(newa1);
    newLi.append(newSpan2);
    const newSpan3 = document.createElement("span");
    newSpan3.className = "currencylist__item-actions";
    const newa2 = document.createElement("a");
    newa2.className = "link js-item-fav";
    const newSpan4 = document.createElement("span");
    newSpan4.className = "icon link__icon";
    const newImg = document.createElement("img");
    newImg.src = "img/ico-fav-outline.svg";
    newImg.alt = "Add to favs";
    newSpan4.append(newImg);
    newa2.append(newSpan4);
    newSpan3.append(newa2);
    newLi.append(newSpan3)
    return newLi;
}

/* Define a class to unhide the details selection of a search */
class unHideDetails {
    constructor(ref) {
        this.listDom = ref;
        this.init();
    }
    init() {
        // Unhide the article details
        let unhidesection = this.listDom.getElementsByClassName('currencydetail');
        console.log(unhidesection);
        console.log(unhidesection[0]);
        unhidesection[0].style.setProperty("transform", 0);
    }
}