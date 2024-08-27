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

    // Function to get user balance from localStorage
    function getUserBalance(userId) {
        const balance = localStorage.getItem(`balance_${userId}`);
        return balance ? parseInt(balance) : 0;
    }

    // Function to save user balance to localStorage
    function saveUserBalance(userId, balance) {
        localStorage.setItem(`balance_${userId}`, balance);
    }

    // Function to handle user login via Telegram
    function userLogin() {
        // Simulate fetching Telegram user ID
        const userId = Telegram.WebApp.initDataUnsafe.user.id;

        // Retrieve or initialize the user's balance
        currentBalance = getUserBalance(userId);

        // Check if the user has already received their points
        if (!localStorage.getItem(`points_claimed_${userId}`)) {
            // First-time login, give random points
            let earnedPoints = getRandomPoints();
            currentBalance += earnedPoints;
            balanceValue.textContent = currentBalance;
            pointValue.textContent = earnedPoints;

            // Save the updated balance and mark points as claimed
            saveUserBalance(userId, currentBalance);
            localStorage.setItem(`points_claimed_${userId}`, 'true');

            // Show the popup
            popup.style.display = 'block';
        } else {
            // User has already claimed points, just display balance
            balanceValue.textContent = currentBalance;
        }
    }

    // Automatically log the user in and manage their balance
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