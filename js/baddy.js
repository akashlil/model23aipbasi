const loadeBaddy = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(data=> displayBaddy(data))
}
loadeBaddy();
const displayBaddy = data => {
    const baddyIdCon = document.getElementById("baddyId");
    for (singlaresult of data.results) {
        const p = document.createElement("p");
        p.innerText = `Fast name: ${singlaresult.name.first} , Last name: ${singlaresult.name.last} , Gmail: ${singlaresult.email}`;
        baddyIdCon.appendChild(p);
    }
}