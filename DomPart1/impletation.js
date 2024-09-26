// selecting by element and change the html info.

// let head = document.querySelector("h1")
// head.innerText = "suraj kumar"
// console.log(head);

// // changing css properties.

// head.style.backgroundColor = "red"
// head.style.color = "gold"

// // Even listner.

// head.addEventListener("click", function(){
//     head.innerHTML = "tu pagal hai"
//     head.style.backgroundColor = "white"
//     head.style.color = "black";
// })

// selecting multiple elements at a same time.

let head = document.querySelectorAll("#heading");

head.addEventListener("click",function(){

    head.style.backgroundColor = "red";
    head.style.color = "white";
    console.log(head);

})
