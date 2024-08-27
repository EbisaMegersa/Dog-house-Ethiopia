document.addEventListener('DOMContentLoaded', () => {
    // List of possible points
    const pointValues = [1, 5, 7, 9, 14, 17, 10, 19, 22, 38, 43, 48, 50];

    // Function to get a random point value from the list
    function getRandomPoints() {
        const randomIndex = Math.floor(Math.random() * pointValues.length);
        return pointValues[randomIndex];
    }

    // Get a random point value
    const earnedPoints = getRandomPoints();

    // Update points in the popup
    document.getElementById('points').innerText = earnedPoints;

    // Update balance
    let currentBalance = parseInt(localStorage.getItem('balance') || '0', 10);
    currentBalance += earnedPoints;
    localStorage.setItem('balance', currentBalance);
    document.getElementById('balance-value').innerText = currentBalance;

    // Fetch the user's Telegram username
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        document.getElementById('username-value').innerText = user.username || 'No username';
    } else {
        document.getElementById('username-value').innerText = 'Guest';
    }

    // Show the popup
    document.getElementById('popup').classList.remove('hidden');
});

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}