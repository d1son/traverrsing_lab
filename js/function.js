$("#addsButton").on("click", function() {
    $(this).add("#addsButton"));
})

$("#addsForm").on("click", function() {
    $(this).add("#addsForm"));
})

$("#addsDiv").on("click", function() {
    $(this).add("#addsDiv"));
});

$("#addsButton").dblclick(function(){
    $(this).remove("#addsDiv"));
});