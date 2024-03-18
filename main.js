
// form modal
const callPopupModal = document.getElementById("callPopup");
const callNowButton = document.getElementById("callNowButton");

function callPopup() {
    callPopupModal.style.display = "flex";

    setTimeout(() => {
        callPopupModal.style.display = 'none';
    }, 4000);

}

callNowButton.addEventListener('click', function makeCall() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if (currentHour >= 9 && currentHour < 19) {
        var mobileNumbers = ['8976778199', '8657536255', '8657760471', '8657547924', '8657760480'];

        var randomIndex = Math.floor(Math.random() * mobileNumbers.length);
        var selectedNumber = mobileNumbers[randomIndex];

        let call = document.getElementById("callNowButton").href = "tel:+91 " + selectedNumber;
        return call
    } else {
        document.getElementById("callNowButton").removeAttribute("href");
        callPopup()
    }
})

