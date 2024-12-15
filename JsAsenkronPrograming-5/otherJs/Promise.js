/*
promise nasıl oluşturulur ve kullanılır öğrenmek için bu dosyayı inceleyebilirsiniz.
Promise: Asenkron işlemler için kullanılan bir yapıdır. Promise nesnesi oluşturulduğunda, işlem başarılı olursa resolve, başarısız olursa reject çalışır.
*/

import SendRequest from '../JsAsenkronPrograming-5/otherJs/xmlRequest.js';

export default function myPromiseFunction()
{
    const myFirstPromise = new Promise( (resolve, reject)  => {

        let result = SendRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

        if(result.status === 200)
        {
            resolve("Çalıştı");
        }
        else
        {
            reject("Çalışmadı");
        }
    });

    myFirstPromise.then( (message) => {
        console.log(message);
    }).catch( (message) => {
        console.log(message);
    });
}


/*

const myFirsPromise = new Promise( (resolve, reject) =>{
    
    //if else ile bunlar kontrol edilmelidir. Resolve çalışırken reject çalışmaz!
    //resolve ve reject fonksiyonları promise nesnesi oluşturulduğunda otomatik olarak oluşturulur.

    resolve("Başarılı");
    //reject("Başarısız");
});


*/