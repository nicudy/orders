
function placeOrder() {
    const time = Date.now()
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:3000/store/${date}/?`, true);
    xhr.send(`date=${date}&order=cookies`);
    return;
}

function getOrders() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:3000/*', true);
    xhr.onload = function (resp) {
        var e = document.getElementById('orders').appendChild(resp);
    };
    xhr.send();
    return;
}
