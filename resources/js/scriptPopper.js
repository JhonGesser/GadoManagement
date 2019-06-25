$(document).ready(function() {
  var lPoppers = [];
for(var i = 1; i <= 9; i++){
  var popper = new Popper(document.getElementById("menuPopper"+i), document.getElementById("popper"+i), {placement: "right"})
}
});
