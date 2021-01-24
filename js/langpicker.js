$(function () {
    $('.selectpicker').selectpicker();
    $('.selectpicker').on('change', function () {
        var $selected = $('.selectpicker option:selected');
        window.location.href = $selected[0].dataset.redirect;
    });

    initPageLanguage();
});

let initPageLanguage = function () {
    if (document.documentElement.lang == 'en') {
        $('.selectpicker').selectpicker('val', 'English');

    } else if (document.documentElement.lang == 'fr') {
        $('.selectpicker').selectpicker('val', 'Français');
    }
}