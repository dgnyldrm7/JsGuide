import { StorageManagment } from "../JsWebStorage-4/component/storageManagment.js";

var myProperties ={
    myName : "Dogan",
    myAge : 25
}

let state = false;

function initializePage() {
    var object = new StorageManagment();

    // localStorage'dan değerleri al ve uygula
    const redColor = object.GetLocalStorage("redColor");
    const yellowColor = object.GetLocalStorage("yellorColor");
    const blackColor = object.GetLocalStorage("blackColor");

    if (redColor && yellowColor && blackColor) {
        document.body.style.backgroundColor = redColor;
        document.getElementById("myButton").style.backgroundColor = yellowColor;
        document.getElementById("myButton").style.color = blackColor;
    }
}

function getRandomColor() {
    // Rastgele bir renk üret
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Clicked() {
    var object = new StorageManagment();

    if (state == false) {
        // Rastgele yeni renkler oluştur
        const newRedColor = getRandomColor();
        const newYellowColor = getRandomColor();
        const newBlackColor = getRandomColor();

        // Yeni renkleri localStorage'a kaydet
        object.AddLocalStorage("redColor", newRedColor);
        object.AddLocalStorage("yellorColor", newYellowColor);
        object.AddLocalStorage("blackColor", newBlackColor);


        //add object to local storage
        let toStringValue = JSON.stringify(myProperties);
        object.AddLocalStorage("myProperties", toStringValue);

        //read object from local storage
        let myObject = JSON.parse(object.GetLocalStorage("myProperties"));
        document.getElementById("textContent").innerHTML = myObject.myName + " " + myObject.myAge;
        

        // Yeni renkleri uygula
        document.body.style.backgroundColor = newRedColor;
        document.getElementById("myButton").style.backgroundColor = newYellowColor;
        document.getElementById("myButton").style.color = newBlackColor;
    } else {
        // LocalStorage'ı temizle ve varsayılan görünümü uygula
        object.ClearAllLocalStorage();
        document.body.style.backgroundColor = ""; // Varsayılan arka plan rengi
        document.getElementById("myButton").style.backgroundColor = "";
        document.getElementById("myButton").style.color = "";
    }

    state = !state;
}

// Sayfa yüklendiğinde initializePage çağrılır
initializePage();
// Clicked fonksiyonu global yapıya eklenir
window.Clicked = Clicked;
