$().ready(function(){
  $("form#address-form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();

    var anchor = "<a href='#'>" + name + "</a>";
    $("#firstname").prepend(anchor);

    var detail = "<p>"+name+"</p>";
    $(".detail").append(detail);

    $("#firstname").click(function(){
      $(".detail").show();
    });



  });
});
