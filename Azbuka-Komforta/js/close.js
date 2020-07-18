const menu    = $('.nav-bar');

$(document).click(function (e) {
    if ( !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.removeClass('toggle');
    };
});