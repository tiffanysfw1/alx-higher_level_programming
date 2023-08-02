$(document).ready(function() {
    $('#btn_translate').on('click', function() {
      const languageCode = $('#language_code').val();
      const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}/`;

      $.get(apiUrl, function(data) {
        const translation = data.hello;

       
        $('#hello').text(translation);
      }).fail(function() {
        
        $('#hello').text('Translation not found for the given language code.');
      });
    });
  });
