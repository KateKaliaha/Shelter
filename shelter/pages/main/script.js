const itemLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list')


function changeStatusLink (event) {
    if (event.target.classList.contains('nav-link')) {
        itemLink.forEach(el => el.classList.remove('active'));
        event.target.classList.add('active')
    }
}

navList.addEventListener('click', changeStatusLink)