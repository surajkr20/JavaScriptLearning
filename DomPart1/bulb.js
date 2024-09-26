let bulb = document.querySelector(".bulb");
let btn = document.querySelector(".btn");

let flag = 0;

btn.addEventListener("click",function(){

               

    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "white";
        btn.innerHTML = "On";
        flag = 0;
    }

})
