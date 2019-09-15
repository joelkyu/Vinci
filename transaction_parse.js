
const cust_json = require('./1000customers.json');
const fs = require('fs');
const axios = require('axios');

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiOTgzMWU3M2UtZDIzNi0zOGE2LWI1MDctZmEwOWVkN2RjOWY5IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI5M2MwZDZiNi0xYzk3LTRkNzgtYjE4Ny0wYWJjMmQyOTExY2MifQ.RgZi5yONFvsEnJZIBvtE4wkNDiPQ2RhGmWnRqbJffpk"

function getTransactions(customer_id) {
  axios.post('https://api.td-davinci.com/api/simulants/' + customer_id + '/simulatedtransactions/search', {
    header: {
      "Authorization": API_KEY,
      "Content-Type": "application/json"
    },
    requestBody: {
      "custId": customer_id,
      "searchCriteria": [     //Filter by time of transaction
        {
          "key": "originationDateTime",
          "operation": ":",
          "value": "2019-09-12"
        }
      ]
    }
  })
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    // console.log(res)
    return res;
  })
  .catch((error) => {
    console.error(error)
  })
}

//Point to the array of customers
var customers_json = cust_json;
var customer_list = customers_json.result.customers;
var customer_id;

//transactions object
var transactions = {};
transactions.list = [];


for (var i = 0; i < 10; i++) {
  customer_id = customer_list[i].id;
  transactions.list[i] = getTransactions(customer_id);
}

var transaction_content = JSON.stringify(transactions);

fs.writeFile('transactions.json', transaction_content, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});