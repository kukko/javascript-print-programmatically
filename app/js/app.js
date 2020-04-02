$(document).on('click', '#ajax-print', function(){
    $.get('/getpdfpath.php', (response) => {
        response = JSON.parse(response);
        let pdf = $('<iframe id="printPdf"/>');
        pdf.attr('src', response.pdfpath);
        pdf.hide();
        $('body').append(pdf);
        pdf[0].contentWindow.focus();
        pdf[0].contentWindow.print();
    });
});