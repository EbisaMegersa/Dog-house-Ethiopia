window.onload = function() {
    const popup = document.getElementById('popup');
    const accountTimeElement = document.getElementById('account-time');
    const pointsElement = document.getElementById('points');

    // This function will calculate points based on account creation time
    function calculatePoints(creationDate) {
        const currentTime = Math.floor(Date.now() / 1000);
        const accountAgeInSeconds = currentTime - creationDate;
        const accountAgeInMonths = accountAgeInSeconds / (30 * 24 * 60 * 60);

        let points = 0;
        if (accountAgeInMonths >= 24) {
            points = 550;
        } else if (accountAgeInMonths >= 12) {
            points = 250;
        } else if (accountAgeInMonths >= 9) {
            points = 150;
        } else if (accountAgeInMonths >= 6) {
            points = 110;
        } else if (accountAgeInMonths >= 3) {
            points = 50;
        }

        return {
            months: Math.floor(accountAgeInMonths),
            points: points
        };
    }

    // Simulate Telegram WebApp initialization (this would normally be provided by Telegram WebApp)
    const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {
        id: 12345,
        creation_date: Math.floor((Date.now() - (1000 * 60 * 60 * 24 * 365 * 2)) / 1000) // 2 years ago
    };

    // Calculate account time and points
    const accountInfo = calculatePoints(user.creation_date);
    accountTimeElement.textContent = `${accountInfo.months} months`;
    pointsElement.textContent = accountInfo.points;

    // Display the popup
    popup.style.display = 'block';

    // Hide the popup after 10 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 10000);

    // Redirect or change page content after 20 seconds
    setTimeout(() => {
        window.location.href = 'anotherpage.html'; // Replace with your desired URL or function
    }, 20000);
};