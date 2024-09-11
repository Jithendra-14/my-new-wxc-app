$(document).ready(function() {
    $('.tablinks').click(function(){
        $('.tablinks').removeClass('active');
        $('.tab-content').removeClass('tab-show');
        $('.tab-content').addClass('tab-hide');
        var tabcontentid = $(this).attr('data-content');
        $('#'+tabcontentid).removeClass('tab-hide').addClass('tab-show');
        $(this).addClass('active');
    });
});

