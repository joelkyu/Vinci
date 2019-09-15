var myInit = {
    method: 'GET',
    headers: {
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiOTgzMWU3M2UtZDIzNi0zOGE2LWI1MDctZmEwOWVkN2RjOWY5IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI5M2MwZDZiNi0xYzk3LTRkNzgtYjE4Ny0wYWJjMmQyOTExY2MifQ.RgZi5yONFvsEnJZIBvtE4wkNDiPQ2RhGmWnRqbJffpk'
    }
  };
  
  var myRequest = new Request('https://api.td-davinci.com/api/branches', myInit);
  
  fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      // the json variable contains the response from the API
      console.log(json);
    });