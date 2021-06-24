let button = document.querySelector('#see-cat');
button.addEventListener('click',() => {
    let apiCat = fetch('https://api.thecatapi.com/v1/images/search');
    apiCat
        .then(response => response.json())
        .then(data => {
            let cat = document.querySelector('#cat');
            cat.src = data[0].url;
            console.log(data[0].url)
        }).catch(e => console.log(e))
})
