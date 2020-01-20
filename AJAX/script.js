var counter = 0;
var name = document.getElementById("fname");
var date = document.getElementById("date");

function addUser() {
    var inputdata2 = document.getElementById('date').value;
    var inputdata = document.getElementById('fname').value;

    var hai = '<div class="row" id="data' + counter + '" style="margin-bottom:15px;">' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + inputdata + '" disabled>' + '</div>' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + inputdata2 + '" disabled>' + '</div>' +
        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-success"><a href="login.html">Submit</a></button>' +
        '</div>' +
        '</div>';


    document.getElementById('userList').insertAdjacentHTML('beforeend', hai);
    counter++;


}