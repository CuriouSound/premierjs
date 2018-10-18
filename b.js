
//BOUTON 1

var button = document.getElementById("1");
var rectangle = document.getElementById("rectangle");
rectangle.style.height = "100px";

function button1() {
    if (rectangle.style.height >= "300px") {

        rectangle.style.height = "100px";

    }
    else {
        rectangle.style.height = parseInt(rectangle.style.height) + 10 + "px";

    }
}
button.addEventListener("click", button1);


//BOUTON 2

var button = document.getElementById("2");
rectangle.style.backgroundColor = "blue";

function button2() {
    document.getElementById("rectangle").style.backgroundColor = "green";
}
button.addEventListener("click", button2);


//BOUTON 3

var button = document.getElementById("3");
rectangle.style.backgroundColor = "blue";

function button3() {

    if (rectangle.style.backgroundColor === "green") {
        rectangle.style.backgroundColor = "blue";

    }


}
button.addEventListener("click", button3);

//BOUTON 4

var button = document.getElementById("4");
var rectangle = document.getElementById("rectangle");
rectangle.style.display = "block";

function button4() {

    if (rectangle.style.display === "block") {
        rectangle.style.display = "none";

    }
}
button.addEventListener("click", button4);

//BOUTON 5

var button = document.getElementById("5");
var rectangle = document.getElementById("rectangle");
rectangle.style.display = "block";

function button5() {

    if (rectangle.style.display === "none") {
        rectangle.style.display = "block";

    }
}
button.addEventListener("click", button5);


