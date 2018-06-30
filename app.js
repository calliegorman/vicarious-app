//get the modal

var modal = document.getElementbyClassName('box');

//get the button that should open the modal

var btn = document.getElementByClassName("btnLink");

//get the element that should close the modal

var close = document.getElementbyID("closeBtn")[0];

//when the user clicks on the button, open

btn.onclick = function() {
  modal.style.display= "block";
}

//when the user clicks on the "closeBtn", close

close.onclick = function() {
  modal.style.display= "none";
}
