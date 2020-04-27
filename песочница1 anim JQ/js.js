let div = $('.div');

div.on('click', function () {
    $(this)
        .animate({
            width: '50px'
        }, 2000)
        .animate({
            height: "200px",
            width: '350px',
        }, 200, border)
        .fadeOut(2000);


})

function border() {
    $(this).css({
        border: "10px solid red",
        'font-size': '85px',
        color: "green",
    })
}


$('.btn').on('click', function () {
    $('<div class="new">').appendTo('body').addClass('haha').attr('type', 'number')
        .css({
            border: '3px solid red',
            width: '100px',
            height: '100px',
            'margin-top': '20px',
        }).html('hello')
        .animate({
            width: '300px',
        })
        .fadeOut(2000)
        .fadeIn(1000);

})
