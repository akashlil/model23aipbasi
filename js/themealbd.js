const sreachData = () => {
    const sreachId = document.getElementById('sreachId');
    const sreachValue = sreachId.value;
    if (sreachValue=='') {
        
    } else {
        // console.log(sreachValue);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${sreachValue}`)
            .then(resp => resp.json())
            .then(data => displayAll(data.meals))
            sreachId.value = ' ';
    }


}

const displayAll = data => {
    const allItem = document.getElementById('allItem');
    allItem.textContent = '';
    data.forEach(element => {
        const coladd = document.createElement('div');
        coladd.classList.add('col');
        coladd.innerHTML = `
           <div  class="card h-100">
                <img onclick="displaySinglaItem('${element.idMeal}')" src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.strMeal}</h5>
                    <p class="card-text">${element.strInstructions.slice(0,250)}</p>
                </div>
        `;
        allItem.appendChild(coladd);

    });
}

const displaySinglaItem = data => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
    fetch(url)
        .then(resp => resp.json())
         .then(data=>itemShow(data))
}


const itemShow = data => {
    const signalItemcard = document.getElementById('signalItemcard');
    signalItemcard.textContent = ' ';
    data.meals.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.strMeal}</h5>
            <p class="card-text">${element.strInstructions.slice(0,250)}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `
        signalItemcard.appendChild(div)


    });
}