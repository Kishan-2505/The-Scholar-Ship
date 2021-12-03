
//back to top button 
const backToTopButton=document.querySelector("#toTop");

window.addEventListener("scroll",scrollFunction);
backToTopButton.addEventListener("click",clickFunction);

function scrollFunction(){
	if(window.pageYOffset > 300)
	{
		 if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      setTimeout(function() {

      backToTopButton.style.display = "block";
  },200);
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 500);
    }
  }
}

function clickFunction(){
	window.scrollTo(0,0);

}

//display box
var btn = document.querySelectorAll("button.modalbtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close-button");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

//back to same position after clicking anyu button 
window.addEventListener('scroll', function() {
  localStorage.setItem('scrollPosition', window.scrollY);
}, false);
window.addEventListener('load', function() {
  if(localStorage.getItem('scrollPosition') !== null)
    window.scrollTo(0, localStorage.getItem('scrollPosition'));
}, false);


//sell book page 

function validateFileType(event){
  var fileName = document.getElementById("fileName").value;
  var idxDot = fileName.lastIndexOf(".") + 1;
  var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  if (extFile==="jpg" || extFile=="jpeg" || extFile=="png"){
   

  }else{
    event.target.value = '';

    alert("Only jpg/jpeg and png files are allowed!");

  }
};