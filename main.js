$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })
})

$('form').on('submit', function(e) {
    e.preventDefault()
    const novaTarefa = $('#new-tarefa').val()
    const novoItem = $('<li></li>').text('• ' + novaTarefa)
    $('ul').append(novoItem)
    $('#new-tarefa').val('')

    novoItem.click(function() {
        $(this).toggleClass('riscado')
    })
}) 
