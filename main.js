/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function dropProv() {
    document.getElementById("myProv").classList.toggle("show");
}

function searchProv() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("thisProv");
    filter = input.value.toUpperCase();
    div = document.getElementById("myProv");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}




function dropStates() {
    document.getElementById("myStates").classList.toggle("show");
}

function stateSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("thisState");
    filter = input.value.toUpperCase();
    div = document.getElementById("myStates");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}






