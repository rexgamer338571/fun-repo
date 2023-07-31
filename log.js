const apiKey = "7beb17f7537a898bfee9001e6375b2d46c028bc3936d111a00629cb7"
var request = new XMLHttpRequest();
request.open('GET',`https://api.ipdata.co/?api-key={apiKey}`);
request.setRequestHeader('Accept', 'application/json');
request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(responseText);
  }
};

request.send();
