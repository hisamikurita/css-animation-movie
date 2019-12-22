const animation01 = $('.animation01')
const animation02 = $('.animation02')
const animation03 = $('.animation03')
const animation04 = $('.animation04')
const animation05 = $('.animation05')

//animation01
$('.start_btn01').on('click', function () {
    animation01.attr('data-state', 'active');
    $('.start_btn01').fadeOut("slow");
    $('#sound')[0].play();
});

//animation02
$('.animation01_bg01').on('animationend webkitAnimationEnd', function () {
    setTimeout(function () {
        animation01.remove();
        animation02.attr('data-state', 'active');
    }, 800);//800
});

$('.animation02_box_wrapper').on('animationend webkitAnimationEnd', function () {
    $('.animation02_container').addClass('active')
});

//animation03
$('.animation02_bg04').on('animationend webkitAnimationEnd', function () {
    animation02.remove();
    animation03.attr('data-state', 'active');
});

//animation04
$('.animation03_bg06_circle03').on('animationend webkitAnimationEnd', function () {
    animation03.remove();
    animation04.attr('data-state', 'active');
});

//animation05
$('.animation04_bg43').on('animationend webkitAnimationEnd', function () {
    // animation04.remove();
    animation05.attr('data-state', 'active');
});


//spanタグ 自動挿入

var textbox = document.querySelector('#span');
var text = textbox.textContent;

textbox.innerHTML = null;

text.split('').forEach(function (c) {
    textbox.innerHTML += '<span>' + c + '</span>';
});