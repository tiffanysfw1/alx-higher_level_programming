
    function lists() {
      const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

      $.get(url, function(data) {
        const movielists = data.results;

        $.each(movielists, function(index, movielist) {
          const title = movielist.title;
          const listitem = $('<li>').text(title);

          // Use the correct selector with "#" for the ID "movie_list"
          $('#movie_list').append(listitem);
        });
      });
    }

    // Call the lists function when the page is loaded
    $(document).ready(function() {
      lists();
    });
