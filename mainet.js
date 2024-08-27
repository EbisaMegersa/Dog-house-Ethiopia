window.onload = function() {
    // Initialize the Telegram Web App
    const tg = window.Telegram.WebApp;

    // Fetch user data (mocked for demonstration, replace with real API call)
    tg.ready(function() {
        const user = tg.initDataUnsafe.user;

        // Simulate retrieving the account creation date (This should be replaced with actual data)
        const accountCreationDate = new Date(user.creation_date * 1000); // Assuming you can get this date from Telegram API

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
        }, 10000);
    });
};