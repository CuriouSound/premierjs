var pp = document.getElementById("pp");
pp.style.fontSize = "10px";
console.log(pp.style.fontSize);

function changeText() 
{
    if (pp.style.fontSize === "30px") {
       
        pp.style.fontSize = "10px";
        console.log(pp.style.fontSize);
    } 
    else{
        pp.style.fontSize = "30px";
        console.log(pp.style.fontSize);
    }
}

pp.addEventListener("click", function(){
    changeText(); 
    console.log(pp.style.fontSize);
});


