$(document).ready(function () {
    $("#menu").addClass("hidden");
    if ($(window).width() <= 850) {
        $("#menuToggle").removeClass("hidden");
        $("#menu").addClass("hidden");

    } else {
        $('#menuToggle').addClass('hidden');
        $('#menu').removeClass("hidden");
    }
});


$(window).resize(function () {
    if ($(window).width() <= 850) {
        $("#menuToggle").removeClass("hidden");
        $("#menu").addClass("hidden");

    } else {
        $('#menuToggle').addClass('hidden');
        $('#menu').removeClass("hidden");
    }
});

$('#menuToggle').click(function () {
    if ($("#menu").hasClass('hidden')) {
        $('#menu').removeClass('hidden');
    } else {
        $('#menu').addClass('hidden');
    }

})

// Collapse menu when a menu link is clicked (mobile)
$('#menu').on('click', 'a', function () {
    if ($(window).width() <= 850) {
        $('#menu').addClass('hidden');
    }
});
