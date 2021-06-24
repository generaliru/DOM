let subtitle = document.querySelector('#subtitle');
let parrafo = document.querySelector('#parrafo');
console.log(subtitle.textContent);
console.log(parrafo);

subtitle.textContent = 'Nuevo Valor!';
// subtitle.textContent = 'Subtítulo'

subtitle.classList.add('red');
subtitle.classList.remove('red');

const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Zorro'];
const list = document.querySelector('#list');
console.log(list)
animales.push('Elefante')

animales.forEach((animal,index) => {
    let item = document.createElement('li');
    item.textContent = `${index} ${animal}`;
    console.log(item)
    list.appendChild(item);
});