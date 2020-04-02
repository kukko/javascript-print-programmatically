$(document).on('click', '.ajax-print', function(){
    $.get($(this).data('url'), (response) => {
        response = JSON.parse(response);
        let printer = $('<iframe/>');
        printer.attr('src', response.path);
        printer.hide();
        $('body').append(printer);
        printer[0].contentWindow.focus();
        printer[0].contentWindow.print();
    });
});