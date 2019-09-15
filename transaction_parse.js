import cust_json from '1000customers.json';
const fs = require('fs');

//POST Request to get transaction data filtered (1000 entries)
var myTransaction = {
    method: 'POST',
    headers: {
        'Authorization': 'YOUR API KEY GOES HERE'
    }, 
    body: {
        "searchCriteria": [     //Filter by time of transaction
          {
            "key": "originationDateTime",
            "operation": ">",
            "value": "2019-09-12"
          }
        ]
      }
};

//New request from 
var myRequest;

fetch(myRequest)
  .then(response => response.json())
  .then(json => {
    // the json variable contains the response from the API
    console.log(json);
  });

//Point to the array of customers
var customers_json = JSON.parse(cust_json);
var customer_list = customers_json.results.customers;
var customer_id;

//transactions object
var transactions = {};
transactions.list = [];


for(var i = 0; i < 1000; i++){
    customer_id = customer_list[i].id;
    myRequest = new Request('https://api.td-davinci.com/api/simulants/' + customer_id + '/simulatedtransactions/search', myTransaction);
    fetch(myRequest);
    transactions.list[i] = myRequest
}

var transaction_content = JSON.stringify(transactions)

fs.writeFile('transactions.json', transaction_content, "utf8");
