$(document).ready(function () {
    $("#btnUpdateModerator").click(function () {
        $('#Users').bootstrapValidator('validate');
    });
    ValidateIt();
});