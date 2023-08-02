$(document).ready(function(){
    const apiUrl = 'https://fourtonfish.com/hellosalut/?lang=fr';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data){
            const translation = data.hello;
        },
        error: function(){
            $('hello').text('Failed to fetch the transaltion.');
        }

    });
});
