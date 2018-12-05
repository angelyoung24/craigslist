/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var input, filter, a, i;
input = document.getElementById("myStates");
div = document.getElementById("thisState");
filter = input.value.toUpperCase();
a = div.getElementsByTagName("a");

function dropStates() {
    document.getElementById("myStates").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function stateSearch() {
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}




