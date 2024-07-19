// Select all elements with class 'box'
const boxes = document.querySelectorAll('.box');

// Options for the IntersectionObserver
const options = {
    root: null, // use the viewport as the root
    threshold: 0.5 // trigger animation when 20% of the element is visible
};

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationName = entry.target.dataset.animation;
            entry.target.classList.add(animationName);
            observer.unobserve(entry.target);
        }
    });
}, options);

// Observe each .box element
boxes.forEach(box => {
    observer.observe(box);
});


/////////////////////////////////////////////////



// Select all elements with class 'box'
const boxess = document.querySelectorAll('.box1');
// Options for the IntersectionObserver
const options1 = {
    root: null, // use the viewport as the root
    threshold: 0.2 // trigger animation when 20% of the element is visible
};
// Create a new IntersectionObserver instance
const observer1 = new IntersectionObserver((entries, observer1) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationName = entry.target.dataset.animation;
            entry.target.classList.add(animationName);
            observer1.unobserve(entry.target);
        }
    });
}, options1);
// Observe each .box element
boxess.forEach(box1 => {
    observer.observe(box1);
});