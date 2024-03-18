function makeCall() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    // Check if the current time is between 9am and 7pm
    if (currentHour >= 9 && currentHour < 19) {
        var mobileNumbers = ['8898814214', '8169444762', '9820160368', '9920907303'];

        // Choose a random mobile number from the array
        var randomIndex = Math.floor(Math.random() * mobileNumbers.length);
        var selectedNumber = mobileNumbers[randomIndex];

        // Call the function to make the call using the selected number
        callNumber(selectedNumber);
    } else {
        // If the current time is outside the allowed hours, disable the button
        document.getElementById("callNowButton").disabled = true;
        alert("Sorry, the call service is only available between 9am and 7pm.");
    }
}

function callNumber(number) {
    // Replace this alert with your actual code to make the call using the selected number
    alert("Calling number: " + number);
}