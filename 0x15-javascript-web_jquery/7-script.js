function fetchcharacter(){
    const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
    
    $.get(url, function(data){
        const name = data.name;

        $('#character').text(name);
    });
}
$(document).ready(function(){
    fetchcharacter();
});
