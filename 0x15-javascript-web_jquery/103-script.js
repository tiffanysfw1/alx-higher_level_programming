$(document).ready(function() {
    function fetchTranslation() {
      const languageCode = $('#language_code').val();
      const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}/`;

   
      $.get(apiUrl, function(data) {
        if (data.hello) {
          const translation = data.hello;
          
          $('#hello').text(translation);
        } else {
          
          $('#hello').text('Translation not found for the given language code.');
        }
      }).fail(function() {
        
        $('#hello').text('Error fetching translation. Please try again later.');
      });
    }

    $('#btn_translate').on('click', function() {
      fetchTranslation();
    });

    $('#language_code').on('keypress', function(event) {
      if (event.which === 13) { 
        fetchTranslation();
      }
    });
  });
