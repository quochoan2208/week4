$(document).ready(function () {
    $("#login-form").submit(function (event) {
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
        var formData = {
            email: $("#email").val(),
            upwd: $("#upwd").val()
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "api/login",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (customer) {
                if (customer.valid === true) {
                    $("#login-form").removeClass("fail");
                    $("#login-form").addClass("success");
                } else {
                    $("#login-form").removeClass("success");
                    $("#login-form").addClass("fail");
                }
                $("#postresultDiv").html("<p>" + "Post Successfully!" + "<br>" + "Email Address: " + customer.email + "<br>" + "Password: " + customer.upwd + "<br>" + "Valid User: " + customer.valid + "</p>");
            },
            error: function (e) {
                alert("Error");
                console.log("Error:", e);
            }
        });
        resetData();
    }

    function resetData() {
        $("#email").val("");
        $("#upwd").val("");
    }
});
