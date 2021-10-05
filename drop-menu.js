/* Drop Menu */

var dropMenu = $('your-ul');
dropMenu.hide();

$('button-or-a').on('click', function(event) {
    dropMenu.fadeIn();
    $('clickable-part').hide();
    event.preventDefault();
});

$(document).on('click', '#btn-cancel', function(event) {
    dropMenu.hide();
    $('clickable-part').fadeIn();
    event.preventDefault();
});