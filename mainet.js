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

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the Telegram Web App is initialized and the user is accessible
    if (typeof Telegram !== 'undefined' && Telegram.WebApp && Telegram.WebApp.initDataUnsafe) {
        const user = window.Telegram.WebApp.initDataUnsafe.user;

        if (user) {
            let username = user.username || user.first_name || 'Unknown';
            if (username.length > 10) {
                username = username.substring(0, 10) + '...';
            }
            document.getElementById('username-value').innerText = username;

            const storedBalance = localStorage.getItem(`balance_${user.id}`);
            if (storedBalance !== null) {
                balance = parseFloat(storedBalance);
            }
            updateDisplay();
        } else {
            alert("Unable to get Telegram user info.");
        }
    } else {
        alert("Telegram Web App API is not available.");
    }
});

  // Update points in the popup
  document.getElementById('points').innerText = earnedPoints;

  // Update balance
  let currentBalance = parseInt(localStorage.getItem('balance') || '0', 10);
  currentBalance += earnedPoints;
  localStorage.setItem('balance', currentBalance);
  document.getElementById('balance-value').innerText = currentBalance;

  // Show the popup
  document.getElementById('popup').classList.remove('hidden');
});

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}