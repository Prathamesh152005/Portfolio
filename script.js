function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const text = ["Java Developer ", "Full Stack Developer ", "Web Designer "];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.querySelector(".typing");

    if (index < text.length) {
        if (!isDeleting && charIndex <= text[index].length) {
            currentText = text[index].substring(0, charIndex++);
        } else if (isDeleting && charIndex >= 0) {
            currentText = text[index].substring(0, charIndex--);
        }

        typing.textContent = currentText;

        if (charIndex === text[index].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            index++;
        }
    } else {
        index = 0;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();