// Open website sections
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const special = document.querySelector(".special");
const finalSection = document.querySelector(".final");

openBtn.addEventListener("click", () => {

    letter.classList.remove("hidden");
    special.classList.remove("hidden");
    finalSection.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

});

// Forgive button
const forgiveBtn = document.getElementById("forgiveBtn");
const message = document.getElementById("message");

forgiveBtn.addEventListener("click", () => {

    message.style.display = "block";

    createHeartBurst();

    message.scrollIntoView({
        behavior: "smooth"
    });

});

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 350);

// Heart burst animation
function createHeartBurst() {

    for (let i = 0; i < 40; i++) {

        setTimeout(createHeart, i * 80);

    }

}
