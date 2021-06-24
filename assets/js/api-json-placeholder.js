// Conectamos con el botón y el div.
let btnUsers = document.querySelector('#btnUser');
let divUser = document.querySelector('#user');

/* btnUsers.addEventListener('click', () => {
    let getUser = fetch('https://jsonplaceholder.typicode.com/users');
    getUser
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                let parr = document.createElement('p');
                parr.textContent = user.name;
                divUser.appendChild(parr);
            });
        }).catch(e => console.log(e))
}) */

async function displayData(){
    let getUser = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(getUser.ok);
    let data = await getUser.json();
    console.log(data)
    data.forEach(user => {
        let parr = document.createElement('p');
        parr.textContent = user.name;
        divUser.appendChild(parr);
    });
}

displayData();