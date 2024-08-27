window.onload = function() {
    const popup = document.getElementById('popup');
    const pointValue = document.getElementById('point-value');
    const balanceValue = document.getElementById('balance-value');
    const close = document.querySelector('.close');

    const pointsArray = [10, 31, 11, 200, 1, 23];
    let currentBalance = 0;

    // Function to generate a random point value
    function getRandomPoints() {
        const randomIndex = Math.floor(Math.random() * pointsArray.length);
        return pointsArray[randomIndex];
    }

    // Simulate the user logging in via Telegram
    function userLogin() {
        let earnedPoints = getRandomPoints();
        currentBalance += earnedPoints;
        balanceValue.textContent = currentBalance;
        pointValue.textContent = earnedPoints;
        popup.style.display = 'block';
    }

    // Automatically log the user in and give random points
    userLogin();

    // Close the popup when the close button is clicked
    close.onclick = function() {
        popup.style.display = 'none';
    }

    // Close the popup when clicking outside of it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
};