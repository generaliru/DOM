const kelvin = (celcius) =>{
    return celcius + 273.15;
}
const farenheit = (celcius) =>{
    return (celcius * (9/5)) + 32;
}

let input = document.querySelector('#input_c');
let button = document.querySelector('#button');

button.addEventListener('click', event =>{
    let Kelvin = document.querySelector("#kelvin");
    let Faren = document.querySelector("#farenheit");
    console.log(input.textContent)
    Faren.textContent = `Farentheit = ${farenheit( parseInt(input.value))}`;
    Kelvin.textContent = `Kelvin = ${kelvin( parseInt(input.value))}`;
} );