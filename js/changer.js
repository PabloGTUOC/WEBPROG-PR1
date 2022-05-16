// Cleans the website at load

export { cleanUpLoad, loadList, increaselist };

class cleanUpLoad {
    constructor(ref) {
        this.listDom = ref;
        this.init();
    }
    init() {
        // delete original content on search title and add general statement
        console.log(this.listDom);
        let removetitle = this.listDom.getElementsByClassName('results-title');
        console.log(removetitle);
        Array.from(removetitle).forEach(item => item.remove());
        let newTitle = document.createElement("H2");
        newTitle.classList.add('results-title'); 
        newTitle.innerHTML = 'You are not searching for anything';
        console.log(newTitle);
        this.listDom.getElementsByClassName('results__header')[0].appendChild(newTitle);


        // delete original content on Currency
        let removeitems = this.listDom.getElementsByClassName('currencylist__item');
        removeitems = Array.from(removeitems);
        console.log(removeitems);
        for (let i = 1; i < removeitems.length;i++) {
                removeitems[i].remove();  
        }
    }
}



class loadList {
    constructor(ref) {
        this.listDom = ref;
        this.init();
    }
    init() {
        // Create list elements
        console.log('        // Create list element1        ');
        let list = [['EUR', 'Euro'], ['DOLL', 'Dollar'], ['YPN', 'Yen']];
        let newList = this.listDom.getElementsByClassName('currencylist__item');
        newList = Array.from(newList);
        for (let i = 0; i < list.length;i++) {
            //console.log(list[i])
            let itemli = increaselist(list[i]);  
            //console.log(itemli);
            newList.push(itemli);
        }
    console.log(newList);
    }
}


function increaselist ({ code, value }) {
    console.info({ code, value })
    const newLi = document.createElement("li");
    newLi.className = "currencylist__item";
    const newSpan1 = document.createElement("span");
    newSpan1.className = "currencylist__item-code";
    newSpan1.append(code);
    newLi.append(newSpan1);
    const newSpan2 = document.createElement("span");
    newSpan2.className = "currencylist__item-name";
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
    console.log(newLi);
    return newLi;
}
