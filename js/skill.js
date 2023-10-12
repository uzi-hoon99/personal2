$(function(){
    var $ppc = $('.htmll .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.htmll .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.css .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.css .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.js .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.js .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.jq .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.jq .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.sass .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.sass .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.w3c .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.w3c .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.wa .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.wa .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.vue .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.vue .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.ps .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.ps .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.ai .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.ai .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.pr .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.pr .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    var $ppc = $('.ae .progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360*percent/100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.ae .ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
});