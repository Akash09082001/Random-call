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

callNowButton.addEventListener('click', async function makeCall() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        if (!response.ok) {
            throw new Error('Failed to fetch time');
        }
        const data = await response.json();
        const currentHour = new Date(data.datetime).getHours();
        const currentMinute = new Date(data.datetime).getMinutes();

        // Convert 9:30 am to minutes
        const startHour = 9;
        const startMinute = 30;
        const startTotalMinutes = startHour * 60 + startMinute;

        // Convert 7:00 pm to minutes
        const endHour = 19;
        const endMinute = 0;
        const endTotalMinutes = endHour * 60 + endMinute;

        const currentTotalMinutes = currentHour * 60 + currentMinute;

        if (currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes) {
            const mobileNumbers = ['8976778199', '8657536255', '8657760471', '8657547924', '8657760480'];

            const randomIndex = Math.floor(Math.random() * mobileNumbers.length);
            const selectedNumber = mobileNumbers[randomIndex];

            const call = "tel:+91 " + selectedNumber;
            window.location.href = call; // Directly initiating the call instead of assigning href
        } else {
            callNowButton.removeAttribute("href");
            callPopup();
        }

        // Check if current time is the start or end time, and perform a hard refresh if so
        if (currentTotalMinutes === startTotalMinutes || currentTotalMinutes === endTotalMinutes) {
            hardRefresh();
        }
    } catch (error) {
        console.error('Error fetching time:', error);
    }
});
