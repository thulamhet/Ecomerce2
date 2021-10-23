var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://fashion4.p.rapidapi.com/v1/version',
  headers: {
    'x-rapidapi-host': 'fashion4.p.rapidapi.com',
    'x-rapidapi-key': '88f3015f4amsh7db4362200ee21ap104472jsn2f97ea7a1a9a'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});