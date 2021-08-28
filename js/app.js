function comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data =>allseen(data))
}  


function albemphoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(datas => albem(datas))
}


function albem(datas) {
    const sectionId = document.getElementById("comment");
    for (const data of datas ) {
        const albemDiv = document.createElement("div");
        albemDiv.classList.add("c");
        albemDiv.innerHTML = `
        <h3>Image Titel ${data.title}</h3>
        <img src="${data.url}"/>`;
        sectionId.appendChild(albemDiv);

    }
}

function allseen(datas) {
    const sectionId = document.getElementById("comment");
    for (let data of datas) {
        const div = document.createElement("div");
        div.classList.add("c");
        div.innerHTML = ` 
        <h3>name: ${data.name}</h3>
        <p> ${data.body}</p>
        `;
        sectionId.appendChild(div);
    }

}
    



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    header: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

    .then((response) => response.json())
    .then((json) => console.log(json))

const kanyeRest = () => {
    fetch("https://api.kanye.rest")
        .then(response => response.json())
    .then(data=>displayQuna(data))
}

const displayQuna = data => {
    const addPar = document.getElementById("addkanye");
    addPar.innerText = data.quote;
}















































// const b1 = [
//     {
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//         work : {
//             id: 1,
//             name: "akash quam laborum",
//             email: "Eliseo@gardner.biz",
//             body: " enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        
//         },
// },{
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//     work : {
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: " enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    
//     },
// },{
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//     work : {
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: " enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    
//     },
// },{
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//     work : {
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: " enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    
//     },
// }
// ]

// for (let i = 0; i < b1.length; i++) {
//     const element = b1[i];
//     console.log(element.work);
    
// }
// for (element of b1){
//     console.log(element.work);
// }
// console.log(b1[0].work.name);

