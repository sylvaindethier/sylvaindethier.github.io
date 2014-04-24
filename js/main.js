jQuery(document).ready(function($){
    /* analytics.js track events */
    $("[data-ga-label]").on('click', function () {
        var label = $(this).attr('data-ga-label');
        // do things w/ `data-ga-label`
        ga('send', 'event', 'link', 'click', label);
    });
});