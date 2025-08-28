window.addEventListener('scroll', function() {
    let navbar = document.querySelector('#navbar');
    navbar.classList.toggle('fixed-nav', window.scrollY > 0);
});

const formResi = document.getElementById('form-resi');
const tracDiv = document.getElementById('trac');

formResi.addEventListener('submit', function(e) {
    e.preventDefault();
    tracDiv.classList.add('show');
    tracDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
    setTimeout(() => {
        document.querySelector('.trac-animation').classList.remove('show');
        document.querySelector('.trac-result').classList.add('show');
    }, 2000);
})

const navList = document.querySelectorAll('.nav-link');
const offcanvas = document.querySelector('.offcanvas');
if (window.innerWidth < 1000) {
    navList.forEach(el => {
        el.addEventListener('click', function() {
            offcanvas.classList.remove('show');
            const offcanvasBg = document.querySelector('.offcanvas-backdrop');
            offcanvasBg.classList.remove('show');
            offcanvasBg.remove();
            document.body.removeAttribute('style');
        })
    })

}