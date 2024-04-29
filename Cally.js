const Details = document.querySelectorAll(".Detail");

Details.forEach(Detail => {
    Detail.addEventListener("click", () => {
        Detail.classList.toggle("active");
    });
});


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}





