document.addEventListener('DOMContentLoaded', () => {
    // List of possible points
    const pointValues = [1, 5, 7, 9, 14, 17, 10, 19, 22, 38, 43, 48, 50];

    // Function to get a random point value from the list
    function getRandomPoints() {
        const randomIndex = Math.floor(Math.random() * pointValues.length);
        return pointValues[randomIndex];
    }

    // Function to initialize user points
    function initializePoints() {
        const earnedPoints = getRandomPoints();

        // Update points in the popup
        document.getElementById('points').innerText = earnedPoints;

        // Update balance
        let currentBalance = parseInt(localStorage.getItem('balance') || '0', 10);
        currentBalance += earnedPoints;
        localStorage.setItem('balance', currentBalance);
        document.getElementById('balance-value').innerText = currentBalance;

        // Mark points as given
        localStorage.setItem('pointsGiven', 'true');
    }

    // Check if points have already been given
    if (!localStorage.getItem('pointsGiven')) {
        initializePoints();
        document.getElementById('popup').classList.remove('hidden');
    } else {
        // Set balance display if points were already given
        document.getElementById('balance-value').innerText = localStorage.getItem('balance') || '0';
    }
});

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}