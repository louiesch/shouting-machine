$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let input = $("#userInput").val().toUpperCase();
    $(".output").text(input);

    event.preventDefault();
  });
});