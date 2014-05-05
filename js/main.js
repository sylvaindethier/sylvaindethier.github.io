/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-48020170-2', 'sylvaindethier.github.io');
ga('require', 'displayfeatures');
ga('send', 'pageview');

/* Viadeo profile */
var viadeoWidgetsJsUrl=document.location.protocol+"//widgets.viadeo.com";(function(){var e=document.createElement('script');e.type='text/javascript';e.async=true;e.src=viadeoWidgetsJsUrl+'/js/viadeowidgets.js';var s=document.getElementsByTagName('head')[0];s.appendChild(e);})();

/* Twitter button */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/* Google Plus */
window.___gcfg={lang:'fr'};(function(){var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/platform.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);})();

jQuery(document).ready(function($){
    /* analytics.js track events */
    $('[data-ga-label]').on('click', function () {
        var label = $(this).attr('data-ga-label');
        // do things w/ `data-ga-label`
        ga('send', 'event', 'link', 'click', label);
    });
});