$(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["pluralNoun", "country", "noun1", "pluralNoun2", "pluralNoun3", "verb", "noun2"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
