$(document).ready(function() {
    $(".gallery-item").each(function(index) {
        $(this).css("height", $(this).width() * (2/3));
    });
});