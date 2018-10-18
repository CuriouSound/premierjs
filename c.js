
var rectangle = document.getElementById("rectangle");
rectangle.style.top = "400px";



document.addEventListener("keydown", function  (event) {

    if (event.keyCode == "38") { 
        rectangle.style.top = "300px";
        
}

}); 

document.addEventListener("keyup", function  (event) {

    if (event.keyCode == "38") { 
        rectangle.style.top = "400px";
        
}

}); 