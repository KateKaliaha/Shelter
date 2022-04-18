const itemLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');
const btnBurger = document.querySelector('.burger');
const spanBurger = document.querySelectorAll('.line');
const headerNav = document.querySelector('.header-nav');
const logo = document.querySelector('.logo')


function changeStatusLink (event) {
    if (event.target.classList.contains('nav-link')) {
        itemLink.forEach(el => el.classList.remove('active'));
        event.target.classList.add('active')
    }
}

navList.addEventListener('click', changeStatusLink)

btnBurger.addEventListener('click', function(){
	btnBurger.classList.toggle('active-btn');
    headerNav.classList.toggle('active-nav');
    logo.classList.toggle('active-logo')
	// menu.classList.toggle('active');
})

if(window.innerWidth<=768) {
    navList.addEventListener('click', function() {
       
            for (let i = 0; i < itemLink.length; i += 1){
                btnBurger.classList.remove('active-btn');
                headerNav.classList.remove('active-nav');
                logo.classList.remove('active-logo')
            }
        })
    }
        