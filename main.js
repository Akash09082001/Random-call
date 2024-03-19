// Form modal
const callPopupModal = document.getElementById("callPopup");
const callNowButton = document.getElementById("callNowButton");

function callPopup() {
    callPopupModal.style.display = "flex";

    setTimeout(() => {
        callPopupModal.style.display = 'none';
    }, 4000);
}

function hardRefresh() {
    location.reload(true); // Reload the page with a hard refresh
}

callNowButton.addEventListener('click', function makeCall() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    // Convert 9:30 am to minutes
    var startHour = 12;
    var startMinute = 30;
    var startTotalMinutes = startHour * 60 + startMinute;

    // Convert 7:00 pm to minutes
    var endHour = 19;
    var endMinute = 0;
    var endTotalMinutes = endHour * 60 + endMinute;

    var currentTotalMinutes = currentHour * 60 + currentMinute;

    if (currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes) {
        var mobileNumbers = ['8976778199', '8657536255', '8657760471', '8657547924', '8657760480'];

        var randomIndex = Math.floor(Math.random() * mobileNumbers.length);
        var selectedNumber = mobileNumbers[randomIndex];

        let call = "tel:+91 " + selectedNumber;
        window.location.href = call; // Directly initiating the call instead of assigning href
    } else {
        callPopup();
    }

    // Check if current time is the start or end time, and perform a hard refresh if so
    if (currentTotalMinutes === startTotalMinutes || currentTotalMinutes === endTotalMinutes) {
        hardRefresh();
    }
});
