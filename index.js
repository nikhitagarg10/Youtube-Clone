let menubtn = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".side-bar");
let videocontainer = document.querySelector(".videos-container");

menubtn.onclick = function(){
    sidebar.classList.toggle("r-sidebar");
    videocontainer.classList.toggle("wide-videos-container");
}

