$('#add_item').on('click', function()
{
    const nitem = $('<li>item</li>');

    $('ul.my_list').append(nitem);
});
