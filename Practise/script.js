

// callback or first class function
function hello(a){
    a();
}

hello(
    function(){
        console.log("hello borther!");
    }
)