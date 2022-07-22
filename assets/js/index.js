// ===== Invoice Page =====
// Print Invoice
function printInvoiceFun() {
    var invoice = document.getElementById("invoice").innerHTML;
    var printFile = window.open('', '', 'height=700, width=1000');
    printFile.document.write('<html>');
    printFile.document.write('<body> <link rel="stylesheet" href="assets/css/invoice.css" />');
    printFile.document.write('<link rel="stylesheet" href="assets/css/bootstrap.min.css" />');
    printFile.document.write(invoice);
    printFile.document.close();
    printFile.print();
}