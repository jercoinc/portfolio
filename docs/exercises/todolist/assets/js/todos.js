// Check off specific todo's by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on x to delete todo's
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //console.log($(this).val());
   
    if (event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
    
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
