function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === '11142006') {
        document.getElementById('password-page').style.display = 'none';
        document.getElementById('countdown-page').style.display = 'block';
        startCountdown();
    } else {
        alert('Sai gòi! Nhập lại đi 😿');
    }
}

function startCountdown() {
    let countdown = 10;
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(() => {
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            showBirthdayMessage();
        }
        countdown--;
    }, 1000);
}

function showBirthdayMessage() {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('announcement').style.display = 'block';
    document.getElementById('fireworks').style.display = 'block';
    launchFireworks();
    launchStars();
}

function launchFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    for (let i = 0; i < 20; i++) {
        createFirework(fireworksContainer);
    }
    setTimeout(() => {
        document.getElementById('fireworks').style.display = 'none';
        document.getElementById('present-page').style.display = 'block';
    }, 5000); // Show present after 5 seconds
}

function createFirework(container) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.backgroundColor = getRandomColor();
    container.appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 1000);
}

function getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function launchStars() {
    const starContainer = document.getElementById('fireworks');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
        setTimeout(() => {
            star.remove();
        }, 2000);
    }
}

function openPresent() {
    document.getElementById('present-page').style.display = 'none';
    document.getElementById('images-page').style.display = 'block';
}