var typed = new Typed(".auto-type", {
    strings: ["MERN STACK DEVELOPER","FRONTEND AND BACKEND SPECIALIST..."],
    typeSpeed: 150,
    loop: true
})

 // JavaScript to add 'visible' class when section is in the viewport
 document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    window.addEventListener('scroll', function() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('visible');
        }
    });
});

 // JavaScript to add 'visible' class when section is in the viewport
 document.addEventListener('DOMContentLoaded', function() {
    const aboutInfo = document.querySelector('.about-info');
    window.addEventListener('scroll', function() {
        const sectionPosition = aboutInfo.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (sectionPosition < screenPosition) {
            aboutInfo.classList.add('visible');
        }
    });
});

 // Show/hide scroll to top button
 window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

    // Initialize EmailJS
    const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) => {
        e.preventDefault()

        //serviceID, templateID, #form, publickey
        emailjs.sendForm('service_fo8n7mq', 'template_e8yj2cq', '#contact-form', 'ylZ9I3LFV0_a4jaYW')
        .then(() => {
            //show sent message
            contactMessage.textContent ='Message sent successfully'

            //remove message every 5 seconds
            setTimeout(() => {
                contactMessage.textContent =''
            }, 5000)

            //clear input fields
            contactForm.reset()
        })
    }

    contactForm.addEventListener('submit', sendEmail)