// declare
var nightBtn = document.getElementById("switch");
var body = document.getElementById("body");
var nightText = document.getElementById("nightText");
var modal = document.getElementById("modal");
// change theme
function nightMode() {
	nightBtn.classList.toggle("switchNight");
	nightText.classList.toggle("nightTextNight");
    document.body.classList.toggle("dark-theme")
    cahngeif()
}

let cahngeif = () => {
    if(document.body.classList.contains("dark-theme")) {
		nightText.innerHTML = "<i style='color:white;' class='fa-solid fa-sun' aria-hidden='true'></i>";
	} else {
		nightText.innerHTML = "<i  class='fa-solid fa-moon' aria-hidden='true'></i>";
	};
}
// change about div
function aaabot() {
    var x = document.getElementById("aboot");
    var y = document.getElementById("projjk");
    if(x.style.display === "block"){
      
    }
    else{
        x.style.display = "block";
        y.style.display = "none";
    }
}
// change to skill div
function prjk() {
    var y = document.getElementById("projjk");
    var x = document.getElementById("aboot");
    if(y.style.display === "block"){
        
    }
    else{
        y.style.display = "block";
        x.style.display = "none";
    }
}

let openModal = () => {
    modal.style.display = "flex"
    modal.style.opacity = "1"
}
let closeModal = () => {
    modal.style.opacity = "0"
    modal.style.display = "none"
}