$( document ).ready( function() {

    var $canvas         = $( 'canvas#my_canvas' );
    //создержимое моего поля для прорисовки фрактала
    var ctx             = $canvas[0].getContext('2d');
    var canvas_width    = 820; // ширина поял для рисунка
    var canvas_height   = 540; // высота поял для рисунка
    var x               = 410-300/2; // x
    var y               = 270-300/3; // y
    var len             = 300;       // довжина
    var alpha_angle     = 0; // кут
    var iteration_count = 10; // итерации
    var line_width      = 2;

    var default_angle   = 45;
    // цвета котрые используются во фрактале
    var colors = [ '#fc0398', '#00CC00', '#FFFF00', '#123EAB' ];
    //переводит градусы в радианы
    var toRadians = function( d ) {
    return Math.PI*(d/180.0);
    };
   
    //получение рандомного числа со сбросом остатка
    var mrand_i = function(max) {
    return Math.floor( Math.random()*max );
    };
    
    var draw = function() {
        //рисует поле для фрактала
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,820,540);
        //мои переданные значения
        iteration_count = getIntegerInput('iterations');
        line_width      = getIntegerInput('line_width');
        anim_speed      = getIntegerInput('anim_speed');

        var i = 1;                    
        //рекурсия
        function myLoop () {          
            //зодержка по времени передаю функцию с отрисовкой фрактала и само время (anim_speed)
            setTimeout(function () {  
                ctx.fillRect(0,0,820,540); 
                //отрисовка пошагово фрактала
                c_curve( x, y, len, alpha_angle, i, ctx );      
                i++;                     
                if (i < iteration_count) {            
                    myLoop();            
                }                       
            }, anim_speed)
        }
        //вызов моей функции
        myLoop();                  
    };
    //отрисовка фрактала
    var c_curve = function( x, y, length, angle, iteration, ctx  ) {
        var alpha  = angle;
        if( iteration > 0 ) {
            length = (length / Math.sqrt(2));
            c_curve(x, y, length, (alpha + default_angle), (iteration - 1), ctx ); // рекурсия
            x = (x + (length * Math.cos(toRadians(alpha + default_angle))));
            y = (y + (length * Math.sin(toRadians(alpha + default_angle))));
            c_curve(x, y, length, (alpha - default_angle), (iteration - 1), ctx ); // рекурсия
        } else {
            ctx.strokeStyle = colors[ mrand_i(colors.length+1) ]; 
        ctx.lineWidth   = line_width;
        ctx.lineCap = 'round';
        //установка в начало
        ctx.beginPath();
        //продвижение
        ctx.moveTo( x, y );
        //продвижение
        ctx.lineTo( x + (length * Math.cos(toRadians(alpha))),
            y + (length * Math.sin(toRadians(alpha))) );
        //прорисовка
        ctx.stroke();
        }
    };
    draw();  
    //события ДОМ (прорисовка по изменению поля ввода)
    $( 'input#iterations' ).change( draw );
    $( 'input#line_width' ).change( draw );
    $( 'input#anim_speed' ).change( draw );
   
} );
//в самом начале заполняю переменны
var getIntegerInput = function(id) {
    return parseInt( document.getElementById(id).value );
}