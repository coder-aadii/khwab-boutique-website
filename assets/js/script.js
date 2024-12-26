// JavaScript to toggle the menu on mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Modal and Form Toggle
document.getElementById('openLoginModal').addEventListener('click', function () {
    document.getElementById('authModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('authModal').style.display = 'none';
});

document.getElementById('loginBtn').addEventListener('click', function () {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginBtn').classList.add('active');
    document.getElementById('registerBtn').classList.remove('active');
});

document.getElementById('registerBtn').addEventListener('click', function () {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerBtn').classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
});
