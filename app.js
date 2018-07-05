
let buttons = document.querySelectorAll('.btnLink');

let modal = document.getElementById('myModal');

let span = document.getElementsByClassName("close")[0];

buttons.forEach(function(button) {
  button.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
      modal.style.display = "none";
  }
});
