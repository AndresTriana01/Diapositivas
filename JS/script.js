// Button mode
$(document).ready(function(){
    $('#btn-dark').css('background', '#232526');
    $('#btn-dark').css('border-color', '#232526');
    $('#dark').hide();
    $('#white').click(function(){
        $('#body').addClass("colorDark");
        $('#box').css('background', '#232526');
        $('.textt').addClass("textDarkMode");
        $('#buttonPython').addClass("colorDark");
        $(this).toggle('fast');
        $('#dark').toggle('fast');
    });


    $('#dark').click(function(){
        $('#body').removeClass("colorDark");
        $('#box').css('background', '#fff');
        $('.textt').removeClass("textDarkMode");
        $('#buttonPython').removeClass("colorDark");
        $(this).toggle('fast');
        $('#white').toggle('fast');
    });
});