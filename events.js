var river=document.getElementById("river-pic");
var sea=document.getElementById("sea-pic");
var nature=document.getElementById("nature-pic");

river.addEventListener("click",()=>  {pic("river")}  );
sea.addEventListener("click",()=>  {pic("sea")}  );
nature.addEventListener("click",()=>  {pic("nature")}  );

function pic(f){
    var p=document.querySelectorAll("img");
    p.forEach((e)=>{
        if(e.classList.contains(f))
        e.classList.remove("hide");
    
    else{
        e.classList.add("hide");
    }
});
    
    
};