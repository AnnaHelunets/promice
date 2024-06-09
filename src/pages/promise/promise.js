// const promise = new Promise((resolve, reject) => {
//     const canFullfill = Math.random() > 0.5
//     if (canFullfill) {
//         resolve(`Проміс виконується успішно", ${canFullfill}`)
//     }reject(`Проміс виконується з помилкою, ${canFullfill}`)
// })
// console.log(promise);



// const promise = new Promise((resolve, reject) => {
//     const canFullfill = Math.random() > 0.5
//     setTimeout(() => {
//         if (canFullfill) {
//             resolve(`Проміс виконується успішно, ${canFullfill}`)
//         }reject(`Проміс виконується з помилкою, ${canFullfill}`)
//     }, 2000)
// })
// console.log(promise);

// // promise.then(onFullfilled, onRejected)

// function onFullfilled(result) {
//     console.log("onFullfiled -> onFullfiled");
//     console.log(`${result}`);
// }
// function onRejected(error) {
//     console.log("onRejected -> onRejected");
//     console.log(`${error}`);
// }

// promise
// .then(onFullfilled)
// .then(x=> {
//     console.log(x);
//     return 10
// })
// .then((y) => {
//     console.log(y);
// })
// .catch((error) => console.log(error)).finally(() => { console.log("Я буду виконаний у будь якому випадку");})

// Промисифікація

// const makeOrder = dish => {
//     const DELAY = 2000
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5
//             setTimeout(() => {
//         if (passed) {
//             resolve(`Ось ваше замовлення, ${passed}`)
//         }reject(`Упс, закінчились продукти, ${passed}`)
//     }, DELAY)
//     })
// }

// function onMakeOrderSuccess (result) {
//     console.log(onMakeOrderSuccess);
//     console.log(result);
// }
// function onMakeOrderError (error) {
//     console.log(onMakeOrderError);
//     console.log(error);
// }

// makeOrder("lobster").then(onMakeOrderSuccess).catch(onMakeOrderError)

//https://pokeapi.co/api/v2/pokemon/ditto


const pocRef = {
    name: document.querySelector(".name"),
    expirience: document.querySelector(".expirience"),
    weight: document.querySelector(".weight"),
}
function fetchPockemonById(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => 
    result.json()
    ).then(addData)
}
fetchPockemonById(5).then(onFetchSuccess).catch(onFetchError)

function onFetchSuccess(pockemon) {
    console.log(pockemon);
}
function onFetchError(error) {
    console.log(error);
}


function addData (pockemon) {
    pocRef.name.textContent = pockemon.name
    pocRef.expirience.textContent = pockemon.base_experience
    pocRef.weight.textContent = pockemon.weight
}