function init(){
    var listeLi = document.querySelectorAll("#menu > li");
    for(li of listeLi){
        var ul = li.querySelector(".sous");
        if(ul){
            ul.style.width = li.clientWidth + "px";
        }
        li.style.width = li.clientWidth + "px";
        
    }
}

init(); // Permets de mettre la width correctement à chaque ul