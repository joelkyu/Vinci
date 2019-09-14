var myInit = {
    method: 'GET',
    headers: {
      'Authorization': 'YOUR API KEY GOES HERE'
    }
  };
  
  var myRequest = new Request('https://api.td-davinci.com/api/branches', myInit);
  
  fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      // the json variable contains the response from the API
      console.log(json);
    });