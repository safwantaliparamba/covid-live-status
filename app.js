let one = document.querySelector('.no-1')
let two = document.querySelector('.no-2')
let three = document.querySelector('.no-3')
let four = document.querySelector('.no-4')
let five = document.querySelector('.no-5')
let six = document.querySelector('.no-6')

let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.covid19api.com/summary')
xhr.send()
xhr.onload = ()=>{
    let response = JSON.parse(xhr.response)
    let global = response.Global
    console.log(response);


    one.innerHTML = global.NewConfirmed
    two.innerHTML = global.NewDeaths
    three.innerHTML = global.NewRecovered
    four.innerHTML = global.TotalConfirmed
    five.innerHTML = global.TotalDeaths
    six.innerHTML = global.TotalRecovered
    console.log(global.TotalRecovered);
}
