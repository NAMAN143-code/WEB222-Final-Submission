function validator() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const pw1 = document.getElementById("password1").value;
    const pw2 = document.getElementById("password2").value;
    const uname = document.getElementById("uname").value;

    //error division
    var err_fname = document.getElementById("err_Fname");
    var err_lname = document.getElementById("err_Lname");
    var err_pw = document.getElementById("err_Password");
    var err_pw2 = document.getElementById("err_pw2");
    var err_uname = document.getElementById("err_Uname");


    //check functions

    //password check 

    function ispassword(password) {
        regex = /^(?=.\d)(?=.[!#$%&? "@])(?=.[a-z])(?=.[A-Z]).{6,}$/;
        return password.match(regex);
    }

    function isfname(fname) {
        regex = /^[A-Za-z]+$/;
        return fname.match(regex);
    }

    function islname(lname) {
        regex = /^[A-Za-z]+$/;
        return lname.match(regex);
    }

    function isuname(uname) {
        regex = /^[A-Za-z]+$/;
        return uname[0].match(regex)
    }

    let err_counter = 0;

    if (!ispassword(pw1)) {
        var err = document.createTextNode("Your password must contain symbols, numbers, lowercase and uppercase letters");
        err_pw.appendChild(err);
        i++;
    }

    if (pw2 != pw1) {
        var err = document.createTextNode("Your passwords donot match");
        err_pw2.appendChild(err);
        i++;
    }

    if (!isfname(fname)) {
        var err = document.createTextNode("your firstname must contain only alphabets");
        err_fname.appendChild(err);
        i++;
    }

    if (!islname(lname)) {
        var err = document.createTextNode("your lastname must contain only alphabets");
        err_lname.appendChild(err);
        i++;
    }

    if (!isuname(uname)) {
        var err = document.createTextNode("first character of your username must contain only alphabets");
        err_uname.appendChild(err);
        i++;
    }

    if (err_counter == 0) {
        alert("Success!")
        return true;
    } else {
        document.getElementById("submit-btn").disabled = true;
    }


    function destructor() {
        document.querySelector('#err_Fname').innerHTML = " ";
        document.querySelector('#err_Lname').innerHTML = " ";
        document.querySelector('#err_Password').innerHTML = " ";
        document.querySelector('#err_pw2').innerHTML = " ";
        document.querySelector('#err_Uname').innerHTML = " ";
    }
}