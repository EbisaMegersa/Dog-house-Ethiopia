window.onload = function() {
    // Get the user's account creation date from Telegram (mocked for this example)
    const accountCreationDate = new Date('2022-05-01'); // Replace with actual Telegram API data

    // Calculate the time difference between the current date and account creation date
    const currentTime = new Date();
    const timeDifference = currentTime - accountCreationDate;
    const monthsDifference = timeDifference / (1000 * 60 * 60 * 24 * 30);

    let points = 0;
    if (monthsDifference >= 24) {
        points = 550;
    } else if (monthsDifference >= 12) {
        points = 250;
    } else if (monthsDifference >= 9) {
        points = 150;
    } else if (monthsDifference >= 6) {
        points = 110;
    } else if (monthsDifference >= 3) {
        points = 50;
    }

    // Display the popup with account time and points
    document.getElementById('account-time').innerText = `${Math.floor(monthsDifference)} months`;
    document.getElementById('points').innerText = points;

    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');

    // Hide the popup after 10 seconds
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 5000);
};