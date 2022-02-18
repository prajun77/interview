// Reference to read file
// https://heynode.com/tutorial/readwrite-json-files-nodejs/

const fs = require("fs");

const inputs = {
    BABA : 1 ,
    TSLA : 5, 
    WISH : 1200 };

// Read stocks.json file
function readStocks(callback){
    fs.readFile ("stocks.json", (err, data) => {
        // Check for errors while reading file
        if (err){
            console.log("File read failed:", err);
            return;
        }
        try {
            const stocks = JSON.parse(data);
            // console.log(stocks[0].ticker); 
            callback(stocks, inputs);
          } catch (err) {
            console.log("Error parsing JSON string:", err);
          }
    });
}

//Need to use callback function 
readStocks((stocks, inputs) => {
    let inputsKeys = Object.keys(inputs);   //gets the keys
    let inputsValue = Object.values(inputs);
    
    let total = 0;
    for (let i = 0; i < inputsKeys.length ; i++) {
        stocks.forEach((item) => {
            if (item.ticker === inputsKeys[i]){
                total = total + (inputsValue[i] * item.close)  
            }
        })
    }
    console.log(total);  
});


