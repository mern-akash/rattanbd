//sidebar
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

//loading gif
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})