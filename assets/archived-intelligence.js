const observableEls = document.querySelectorAll('.animate--fadeOnScroll')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--fadedOnScroll')
        }
        else {
            entry.target.classList.remove('')
        }

    })
},
{
    delay: 1000,
    threshold: 1
}
);

[...observableEls].forEach((observableEl) => {
    observer.observe(observableEl)
});