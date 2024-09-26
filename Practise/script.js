

// callback or first class function
function hello(a){
    a();
}

hello(
    function(){
        console.log("hello borther!");
    }
)

let a = 34;
let b = 45;

console.log(a/b);