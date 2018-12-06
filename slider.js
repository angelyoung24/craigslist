var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "img_USA.jpeg";
images[1] = "img_Canada.jpeg";
images[2] = "img_europe.jpeg";
images[3] = "img_MiddleEast.jpeg";
images[4] = "img_oceania.jpeg";
images[5] = "img_LA.jpeg";
images[6] = "img_capetown.jpeg";

// Change Image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;