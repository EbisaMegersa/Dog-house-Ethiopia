window.onload = function() {
    // Simulate progress
    setTimeout(() => {
        document.getElementById('progress-age').style.width = '100%';
    }, 700);

    setTimeout(() => {
        document.getElementById('progress-activity').style.width = '100%';
    }, 1050);

    setTimeout(() => {
        document.getElementById('progress-premium').style.width = '100%';
    }, 1400);

    setTimeout(() => {
        document.getElementById('progress-og').style.width = '100%';
    }, 2000);

    // Redirect to main.html after 20 seconds
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 10000);
};