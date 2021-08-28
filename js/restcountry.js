const restCountry = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => restCountryAllData(data))
}

restCountry();

const restCountryAllData = data => {
    const content = document.getElementById("content");
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add("st")
        div.innerHTML = `
        <h1>${element.name}</h1>
        <p>${element.capital}</p>
        <button class='' onclick="nameSearch('${element.name}')">show All Data</button>
        `
        content.appendChild(div)

    });

}

const nameSearch = data => {
    const url = `https://restcountries.eu/rest/v2/name/${data}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => display(data[0]))
}

const display = data => {
    console.log(data);
    const singlaContener = document.getElementById('singlaContener');
    singlaContener.innerHTML = `
    <h1>${data.name}</h1>
    <img class='ímg' src='${data.flag}'/>
 
    `;

}