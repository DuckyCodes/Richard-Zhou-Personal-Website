/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');

            })

        }


    })

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/

ScrollReveal({ 
    //reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Fullstack Developer', 'Engineer By Heart'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/*==================== contact me ====================*/

let contactbtn = document.getElementById('contact');

contactbtn.addEventListener('click', function() {
    contactbtn.request();
});

function toggleReadMore(textId, btn) {
    var moreText = document.getElementById(textId);
    console.log("Before toggle:", moreText.style.display); // Log current state
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";  // Show the hidden content
        btn.textContent = "Read Less";      // Change button text
    } else {
        moreText.style.display = "none";    // Hide the content
        btn.textContent = "Read More";      // Change button text

    }
    console.log("After toggle:", moreText.style.display); // Log current state

}








