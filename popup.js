$(document).ready(function() {
  $(function() {
    $("#tags").autocomplete({
      source: terms
    });
  });
});