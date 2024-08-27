window.onload = function() {
    const popup = document.getElementById('popup');
    const accountTimeElement = document.getElementById('account-time');
    const pointsElement = document.getElementById('points');

    // Function to calculate points based on account creation time
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

    // Retrieve user data from Telegram WebApp
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    if (user && user.id) {
        // Fetch the creation date using Telegram API (mock example)
        // This would typically involve calling Telegram's API to get the account creation date
        fetch(`https://api.telegram.org/bot<7389124308:AAE_7jENzHy56rT4g2kTsadNcqdMMcL8d7I>/getChat?chat_id=${user.id}`)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.result) {
                    const creationDate = data.result.date; // Assuming 'date' contains the account creation timestamp

                    // Calculate account time and points
                    const accountInfo = calculatePoints(creationDate);
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
                } else {
                    console.error('Failed to fetch user data from Telegram');
                }
            })
            .catch(error => console.error('Error fetching Telegram data:', error));
    } else {
        console.error('Telegram user data is not available');
    }
};