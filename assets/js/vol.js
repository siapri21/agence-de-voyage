const navigation = document.getElementById('mobile');
console.log("cc");

navigation.addEventListener('click', () => {
    const navbar = document.getElementById('navigation');
    navbar.classList.toggle('active')
})