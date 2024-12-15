export default function SendRequest(type, url, defaultValue = true) {
    // XMLHttpRequest nesnesi oluşturulur.
    var xhttp = new XMLHttpRequest();

    // İstek oluşturulur.
    xhttp.open(type, url, defaultValue);

    // İstek gönderilir.
    xhttp.send();

    
    return (
        xhttp.onreadystatechange = function () {
            const response = {
                status: xhttp.status,
                statusText: xhttp.statusText,
                responseText: xhttp.responseText
            };
        }
    );
};


