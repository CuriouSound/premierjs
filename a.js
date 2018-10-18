var pp = document.getElementById("pp");
pp.style.fontSize = "10px";


function changeText() 
{
    if (pp.style.fontSize === "30px") {
       
        pp.style.fontSize = "10px";
        
    } 
    else{
        pp.style.fontSize = "30px";
       
    }
}

pp.addEventListener("click", function(){
    changeText(); 
    
});


