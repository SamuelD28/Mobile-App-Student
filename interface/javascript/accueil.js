/*
*/

let UI_nav = document.querySelector(".nav");
let UI_navItem = document.querySelectorAll(".nav-item");
let UI_navOffer = document.querySelectorAll(".nav-offer");
let UI_section = Array.prototype.slice.call(document.querySelectorAll("section"));
let UI_loading = document.querySelector(".load");
let UI_action = document.querySelector("#action");
let UI_actionBar = document.querySelector("#action-bar");
let UI_send = document.querySelector("#send");
let UI_receive = document.querySelector("#receive");


Main();

function Main(){
    //Add event listener
    UI_nav.addEventListener("click" , ChangeContent);
    UI_actionBar.addEventListener("click" , ShowOffer)
}

function ChangeContent(e){
    if(e.target.classList.contains("nav-item"))
    {
        //Show loading icon
        UI_loading.style.display = "flex";
        //Toggle the navbar
        UI_navItem.forEach(function(navItem){
           navItem.classList.remove("nav-active"); 
        });
        e.target.classList.add("nav-active");
        //Hide all the displayed section
        UI_section.forEach(function(section){
           section.classList.remove("section-active"); 
        });
        if(e.target.id == "users" || e.target.id == "message" || e.target.id == "profil" || e.target.id == "users"){
            UI_actionBar.innerHTML = `<div id="setting" class="action-item">
                                            <i class="fas fa-cog"></i>
                                        </div>
                                        <div id="action" class="action-item">
                                            <i class="fas fa-plus"></i>
                                        </div>`;
        }
        else if(e.target.id == "offer"){
           UI_actionBar.innerHTML = `<div class="nav-item nav-active"><i class="send fas fa-share-square"></i></div>
                                    <div class="nav-item"><i class="receive flip fas fa-share-square"></i></div>`; 
        }
        
        
        setTimeout(function(){
            UI_section.find(function(section){
                return section.classList.contains(e.target.id)
            }).classList.add("section-active");
            UI_loading.style.display = "none";
        } , 500)
    }
}

function ShowOffer(e){
    if(e.target.classList.contains("nav-offer"))
    {
        UI_navOffer.forEach(function(navOffer){
           navOffer.classList.remove("nav-active"); 
        });
        e.target.classList.add("nav-active");  
        
        UI_send.style.display ="none";
        UI_receive.style.display = "none";
        
        if(e.target.classList.contains("send"))
        {
            UI_send.style.display ="block";
        }else{
            UI_receive.style.display = "block";
        }
        
    }
    
}