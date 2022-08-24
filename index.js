const body = document.querySelector('body');
const navbarToggle = document.querySelector('.navbarToggler');
const mobiNavbar = document.querySelector('.mobiNavbar');
const navbarClose = document.querySelector('.navbarClose');
const navbar = document.querySelector('.navbar');
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const servicesSection = document.querySelector('#services');
const signUpSection = document.querySelector('#signUp');
const footerSection = document.querySelector('#footerMainSection');
const hr = document.querySelector('hr');
//navbar link selectors
const homeLink = document.querySelector('#homeLink');
const aboutLink = document.querySelector('#aboutLink');
const serviceLink = document.querySelector('#serviceLink');
//mobi navbar link selectors
const mobiHomeLink = document.querySelector('#mobiHomeLink');
const mobiAboutLink = document.querySelector('#mobiAboutLink');
const mobiServiceLink = document.querySelector('#mobiServiceLink');
const mobiSignLink = document.querySelector('#mobiSignLink');

const serviceCard = document.querySelectorAll('.serviceCard');
console.dir(signUpSection)
//Mobile navigation toggle
navbarToggle.addEventListener('click', ()=>{
    mobiNavbar.classList.toggle('disable');
    navbarToggle.classList.toggle('disable');
    navbarClose.classList.toggle('disable');
})
navbarClose.addEventListener('click', ()=>{
    mobiNavbar.classList.toggle('disable');
    navbarToggle.classList.toggle('disable');
    navbarClose.classList.toggle('disable');
})
mobiHomeLink.addEventListener('click',()=>{
    mobiNavbar.classList.toggle('disable');
    navbarToggle.classList.toggle('disable');
    navbarClose.classList.toggle('disable');
})
mobiAboutLink.addEventListener('click',()=>{
    mobiNavbar.classList.toggle('disable');
    navbarToggle.classList.toggle('disable');
    navbarClose.classList.toggle('disable');
})
mobiServiceLink.addEventListener('click',()=>{
    mobiNavbar.classList.toggle('disable');
    navbarToggle.classList.toggle('disable');
    navbarClose.classList.toggle('disable');
})
mobiSignLink.addEventListener('click',()=>{
    mobiNavbar.classList.toggle('disable');
    navbarToggle.classList.toggle('disable');
    navbarClose.classList.toggle('disable');
})
//
document.addEventListener('scroll', ()=>{
    if(scrollY>=homeSection.offsetTop && scrollY < aboutSection.offsetTop-50){
        homeLink.classList.add('indicator')
        aboutLink.classList.remove('indicator')
        serviceLink.classList.remove('indicator')
    }
    else if (scrollY>=aboutSection.offsetTop-50 && scrollY< servicesSection.offsetTop){
        homeLink.classList.remove('indicator')
        aboutLink.classList.add('indicator')
        serviceLink.classList.remove('indicator')
    }
    else if( scrollY>=servicesSection.offsetTop && scrollY< signUpSection.offsetTop-10){
        homeLink.classList.remove('indicator')
        aboutLink.classList.remove('indicator')
        serviceLink.classList.add('indicator')
    }
    else{
        serviceLink.classList.remove('indicator')
    }
     console.log(scrollY )
})

for(let card of serviceCard){
    card.addEventListener('mouseover', ()=>{
        card.classList.add('serviceCardHover')
    })
    card.addEventListener('mouseleave', ()=>{
        card.classList.remove('serviceCardHover')
    })
}