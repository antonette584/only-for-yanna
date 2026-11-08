// =====================================
// 1. ELEMENTS
// =====================================

const questionScreen = document.getElementById("question-screen");
const menuScreen = document.getElementById("menu-screen");

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const questionText = document.getElementById("question-text");
const questionSubtitle = document.getElementById("question-subtitle");

const menuOptions = document.querySelectorAll(".menu-option");
const backButtons = document.querySelectorAll("[data-back]");

const vinyl = document.getElementById("vinyl");


// =====================================
// 2. SCREEN NAVIGATION
// =====================================

function showScreen(target) {
    if (!target) return;

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================
// 3. YES AND NO BUTTONS
// =====================================

let noClicks = 0;
let yesScale = 1;

const messages = [
    "Are you sure? 🥺",
    "Really really sure? 💗",
    "Give it another thought! 🌷",
    "Look how big YES is getting! ♡",
    "There's only one choice left! 💗"
];

noButton.addEventListener("click", () => {

    noClicks++;

    yesScale += 0.35;

    yesButton.style.transform = `scale(${yesScale})`;

    questionSubtitle.textContent =
        messages[Math.min(noClicks - 1, messages.length - 1)];

    if (noClicks >= 5) {

        noButton.style.display = "none";

        questionSubtitle.textContent =
            "Looks like there's only one button left! 💗";

    }

});

yesButton.addEventListener("click", () => {

    questionText.textContent = "YAYYY!! 💗";

    questionSubtitle.textContent =
        "I have four little surprises waiting for you.";

    yesButton.disabled = true;
    noButton.style.display = "none";

    setTimeout(() => {
        showScreen(menuScreen);
    }, 900);

});


// =====================================
// 4. FOUR CHOICES
// =====================================

menuOptions.forEach(option => {

    option.addEventListener("click", () => {

        const targetId = option.dataset.panel;
        const targetScreen = document.getElementById(targetId);

        showScreen(targetScreen);

    });

});


// =====================================
// 5. BACK BUTTONS
// =====================================

backButtons.forEach(button => {

    button.addEventListener("click", () => {

        showScreen(menuScreen);

    });

});


// =====================================
// 6. SPOTIFY / VINYL
// =====================================

// Spotify embeds are controlled inside their own iframe.
// Regular HTML audio controls cannot control them.
// Keep the vinyl visible without calling audio methods.


// =====================================
// 7. FLOATING HEARTS
// =====================================

const heartsContainer = document.getElementById("floating-hearts");

const heartSymbols = ["♡", "♥", "💕", "୨୧"];

if (heartsContainer) {

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        heart.style.animationDelay =
            (Math.random() * 10) + "s";

        heartsContainer.appendChild(heart);

    }

}


// =====================================
// 8. INITIAL SCREEN
// =====================================

showScreen(questionScreen);

console.log("Website successfully loaded! 💗");