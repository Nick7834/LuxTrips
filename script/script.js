// Prallax

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
});

// Scroll

gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // Регистрируем плагин 
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
});

// header fixed 

// window.onscroll = function ShowHeader() {

//     let header = document.querySelector('.header');

//     if(window.scrollY > 50) {
//         header.classList.toggle('header--fixed');
//     }
// }


// Travel search

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelectorAll('.search-title');
    const dropD = document.querySelectorAll('.list');

    title.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentTitle = e.currentTarget;
            let drop = currentTitle.closest('.search__destination').querySelector('.list');

            dropD.forEach(el => {
                if (el !== drop) {
                    el.classList.remove('list--active');
                }
            });

            drop.classList.toggle('list--active');
           
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search__destination')) {
            dropD.forEach(el => {
                el.classList.remove('list--active');
            });
        }
    });

    const imput = document.querySelectorAll('.block-choice__input-tyre');

    imput.forEach((item) => {
            item.addEventListener('click', (e) => {
                    let self = e.target;
                    let toggle = self.parentNode.parentNode.parentNode.querySelector('.search-title');
                    toggle.innerText = self.value;
            });
    });
});


// Tabs 

const tabs = document.querySelectorAll('.filter__tab');

tabs.forEach((e) => {
    e.addEventListener('click', () => {

        tabs.forEach((e) => {
            e.classList.remove('active-tab');
        })
        
        e.classList.add('active-tab');
    });
});

// burger 


const nav = document.querySelector('.nav-mob');
const burger = document.querySelector('.burger');
const body = document.body;

burger.addEventListener('click', () => {
    nav.classList.toggle('active-mob');
    body.classList.toggle('stop-scroll')
});
