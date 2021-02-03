// Navbar
$(function() {
    $("#navbar").load("navbar.html");
});

// Display date
// This was borrowed from a jsfiddle here: https://jsfiddle.net/2c8uogff/
function dateFunction() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var n = new Date();
    var today = n.getDay();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();
    document.getElementById("day").innerHTML = days[today];
    document.getElementById("date").innerHTML = d + " " + months[m] + " " + y;
}

// Blog post content
$(function() {
    $("#item0").load("item0.html");
});

$(function() {
    $("#item1").load("item1.html");
});

$(function() {
    $("#item2").load("item2.html");
});

$(function() {
    $("#item3").load("item3.html");
});

$(function() {
    $("#item4").load("item4.html");
});

$(function() {
    $("#item5").load("item5.html");
});

$(function() {
    $("#item6").load("item6.html");
});
