// Placeholder variable for AM PM
var amPM = "AM";
// Helper variable to format the time in AM PM way
var midDay = 12;
// Helper variable for the father pic logic
var happyLion = false;

// Set the main image at first
document.getElementById("lolcatImage").src = "static/img/main.jpg";
var currentImage = "static/img/main.jpg";

// The function that will update the time and image and text regularly
var displayTime = function () {

    // Get the time variables that we will use
    var currentDateFull = new Date();
    var hours = currentDateFull.getHours();
    var minutes = currentDateFull.getMinutes();
    var seconds = currentDateFull.getSeconds();


    // Get the value of the Scroll down select option
    var wakeUpTimeValue = document.getElementById("wakeUpTimeSelector").value;
    var napTimeValue = document.getElementById("napTimeSelector").value;
    var lunchTimeValue = document.getElementById("lunchTimeSelector").value;

    // Check if it's morning or noon or evening
    if (hours < 12) {
        document.getElementById("timeEvent").innerText = "Good Morning :)"
    }

    if (hours > 12 && hours < 17) {
        document.getElementById("timeEvent").innerText = "Good after noon :)"
    }

    if (hours > 17) {
        document.getElementById("timeEvent").innerText = "Good Evening :)"
    }


    if (happyLion == false) {
        // Check if Wake up time is selected
        if (hours == wakeUpTimeValue) {
            currentImage = "static/img/wakeUp.jpg";
            document.getElementById("lolcatImage").src = "static/img/wakeUp.jpg";
            document.getElementById("timeEvent").innerText = "Wake Up!!"
        }
        // Check if lunch time is selected
        else if (hours == lunchTimeValue) {
            currentImage = "static/img/lunch.jpg";
            document.getElementById("lolcatImage").src = "static/img/lunch.jpg";
            document.getElementById("timeEvent").innerText = "MMMM lunch time!!!"
        }
        // Check if sleep time is selected
        else if (hours == napTimeValue) {
            currentImage = "static/img/sleep.jpg";
            document.getElementById("lolcatImage").src = "static/img/sleep.jpg";
            document.getElementById("timeEvent").innerText = "Time to sleep!!"
        }
    }


    if (hours >= midDay) {
        amPM = "PM";

        if (hours > midDay) {
            hours = hours - 12;
        } else {
            hours = 12;
        }

    }

    // Format Hours
    if (hours < 10) {
        hours = "0" + hours;
    }
    // Format Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    // Format seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var currentTime = hours + ":" + minutes + ":" + currentDateFull.getSeconds() + " " + amPM;

    // Empty clock span if it has something in it
    if (document.getElementById("clock").firstChild) {
        document.getElementById("clock").removeChild(document.getElementById("clock").firstChild);
    }

    // Set the time
    document.getElementById("clock").innerText = currentTime;

    // The button click logic
    var happylionButton = document.getElementById("happyLion");
    happylionButton.addEventListener("click", myFunction)

    function myFunction() {
        if (happyLion == false) {
            happyLion = true;
            happylionButton.innerText = "Hi there !!";
            happylionButton.style.backgroundColor = "#0A8DAB";
            document.getElementById("lolcatImage").src = "static/img/happyLion.jpg";

        } else {
            happyLion = false;
            happylionButton.innerText = " Click to see my father ";
            happylionButton.style.backgroundColor = "#222";
            document.getElementById("lolcatImage").src = currentImage;

        }

    }


}

// Recall the function every 1000 ms
setInterval(displayTime, 1000);


