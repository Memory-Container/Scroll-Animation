const box = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const bottom = window.innerHeight / 3 * 2;

    box.forEach((element) => {
        const top = element.getBoundingClientRect().top;

        if(top < bottom) {
            element.classList.add('show');
            element.classList.remove('hidden-left');
        } else {
            if(element.classList.contains('show')) {
                element.classList.remove('show');
                element.classList.add('hidden-left');
            }
        }
    });
}