function check1() {
    const first = document.getElementById("nameProduct").value;
    var regex = /[a-zA-Z0-9\s]$/;
    if (regex.test(first)) {
        return true;
    } else {
        return false;
    }
}
function check2() {
    const second = document.getElementById("count").value;
    var regex = /[0-9]$/;

    if (regex.test(second)) {
        return true;
    } else {
        return false;
    }
}
function check3() {
    const third = document.getElementById("cin").value;
    var regex = /[0-9]$/;

    if (regex.test(third)) {
        return true;
    } else {
        return false;
    }
}
function check4() { 
    const fouth = document.getElementById("date"); 
    
    return (fouth.validity.valueMissing)
}

function outputData() {
    if ((check1()) === false)
        document.getElementById("nameProduct").style.color = "red";
    else
    document.getElementById("nameProduct").style.color = "green";
    if ((check2()) === false)
        document.getElementById("count").style.color = "red";
        else
        document.getElementById("count").style.color = "green";
    if ((check3()) === false)
        document.getElementById("cin").style.color = "red";
        else
        document.getElementById("cin").style.color = "green";
    if ((check4()) === false)
        document.getElementById("date").style.color = "red";
        else
        document.getElementById("date").style.color = "green";
}
function phoneAnim() {
    var title = document.getElementById("p").style.color = "red";
}
function REphoneAnim() {
    var title = document.getElementById("p")
    if (title.style.color === "red") {
        document.getElementById("p").style.color = "white";
    }
}

 