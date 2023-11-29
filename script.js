$(document).ready(function(){
    $('p').text('Змінений текст');
    $('#task1').addClass('highlight');
    $('li').addClass('list-item');
    $('.highlight').css('color', 'green');
    $('.list-item').css('background-color', 'lightgray');
    $('.highlight').slideDown(5000);
    $('#task1 p:last').text('Новий останній текст');
    $('<button>Видалити елементи</button>').appendTo('body').click(function(){
        $('.list-item').remove();
    });
});