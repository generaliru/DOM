const animales=['Perro','Gato', 'Mapache','Pez','Leopardo','Raton', 'Zorro','Elefante','Pantera','Perico'];
const list=document.querySelector('#animales');

const computadoras=['Dell','HP', 'Toshiba','Asus','Hisense','Mac', 'IBM','Lenovo','Huawei','otra'];
const list2=document.querySelector('#pc');

const companeros=['Miguel','Yanni', 'Luz','Uriel','Jaquelin','Joel', 'Magali','Carlos','Rodrigo','Laura'];
const list3=document.querySelector('#companeros');

const btnAnimales = document.querySelector('#bt_animales');
const btnComputers = document.querySelector('#bt_computers');
const btnPeople = document.querySelector('#bt_people');

function displayList(array,list){
    array.forEach(element => {
        const item = document.createElement('li');
        item.textContent = element;
        list.appendChild(item);
    });
}

btnAnimales.addEventListener('click', event => {
    displayList(animales,list)
})
btnComputers.addEventListener('click', event => {
    displayList(computadoras,list2)
})
btnPeople.addEventListener('click', event => {
    displayList(companeros,list3)
})