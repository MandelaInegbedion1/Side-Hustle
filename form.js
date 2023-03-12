function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var phone = document.Form.phone.value;
    var gender = document.Form.gender.value;

    var nameErr = emailErr = phoneErr = genderErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }


    if (email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if (phone == "") {
        printError("phoneErr", "Please enter your phone number");
        var elem = document.getElementById("phone");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.text(phone) === false) {
            printError("phoneErr", "Please enter a valid 11 digit phone number");
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            phoneErr = false;
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }


    if (gender == "") {
        printError("genderErr", "Please enter your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");

    }

    if ((nameErr || emailErr || phoneErr || genderErr) == true) {
        return false;
    }
};