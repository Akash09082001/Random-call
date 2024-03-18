function makeCall() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if (currentHour >= 9 && currentHour < 19) {
        var mobileNumbers = ['8898814214', '8169444762', '9820160368', '9920907303'];

        var randomIndex = Math.floor(Math.random() * mobileNumbers.length);
        var selectedNumber = mobileNumbers[randomIndex];

        let call = document.getElementById("callNowButton").href = "tel:" + selectedNumber;
        return call
    } else {
        document.getElementById("callNowButton").removeAttribute("href");
        alert("Sorry, the call service is only available between 9am and 7pm.");
    }
}
