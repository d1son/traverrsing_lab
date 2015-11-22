 $(document).ready(function() { 
  var count = 0; 
  $("#add-shape").click(function() {
    $("#output").append("<div><span>" + (++count) + "</span></div>");
    $ ("#output div:last")
          .addClass("shape")
          .addClass($("#selected-shape").val())
          .addClass($("#selected-color").val());
  });
});