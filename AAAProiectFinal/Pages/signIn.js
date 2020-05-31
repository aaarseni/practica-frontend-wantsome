$(document).ready(function(){

    $('#pageForm').on('click', function(e){
        e.preventDefault();
        var link = $(this).attr('href');
        $('.page').load(link);
    });

});