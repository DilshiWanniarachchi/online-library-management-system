
/*Hide and unhide entered password */
 //--- References:- w3schools.com
function showPassword() { 
    var x = document.getElementById("psw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function newslettersreg() {
    // Get the checkbox
    var checkBox = document.getElementById("newsCheck");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


