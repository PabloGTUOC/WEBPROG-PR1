// Checks the currency list and returns an array with the whole list available for search
const renderListCurrencies = (res) => {
    // Handles if res is falsey
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!Object.keys(res).length){
      console.log("Try again! There were no suggestions found!");
      return;
    }
    const entries = Object.entries(res);   
    console.log(entries[3]);
    return entries;
  }

export { renderListCurrencies as renderListCurrencies };