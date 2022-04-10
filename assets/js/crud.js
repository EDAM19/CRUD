$(function() {
    $(".toggle").on("click",
        function() {
            if ($(".item").hasClass("active")) {
                $(".item").removeClass("active");
                $(this).find("a").html("<i class='fas fa-bars'></i>");
            } else {
                $(".item").addClass("active");
                $(this).find("a").html("<i class='fas fa-times'></i>");
            }
        });
});

$(function() {
    $.datepicker.setDefaults($.datepicker.regional["es"]);
    $("#datepicker").datepicker({
        firstDay: 0
    });
});
