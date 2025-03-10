// Function to play audio when user interacts
function playAudio() {
    let guitar = document.getElementById("guitar");
    let fire = document.getElementById("fire");

    if (guitar && fire) {
        guitar.volume = 0.5;
        fire.volume = 0.5;

        guitar.play().catch(error => console.log("Guitar audio blocked:", error));
        fire.play().catch(error => console.log("Fire audio blocked:", error));

        // Remove event listener after first interaction
        document.removeEventListener("click", playAudio);
    }
}

// Function to show hover text on mouse movement
function showHoverText(event) {
    let hoverText = document.getElementById("hover-text");
    let screenWidth = window.innerWidth;
    let cursorX = event.clientX;

    if (cursorX < screenWidth * 0.3) { 
        hoverText.className = "hover-text left-text";
        hoverText.style.opacity = 1;
    } else if (cursorX > screenWidth * 0.7) {
        hoverText.className = "hover-text right-text";
        hoverText.style.opacity = 1;
    } else {
        hoverText.style.opacity = 0;
    }
}

// Function to hide hover text
function hideHoverText() {
    let hoverText = document.getElementById("hover-text");
    if (hoverText) {
        hoverText.style.opacity = 0;
    }
}

// Function to show floating icon on click
function showIcon(event) {
    let icon = document.createElement("img");
    icon.src = "c.png";
    icon.classList.add("c-icon");
    document.body.appendChild(icon);

    icon.style.left = event.clientX + "px";
    icon.style.top = event.clientY + "px";

    setTimeout(() => {
        icon.style.animation = "floatUp 1s forwards";
        setTimeout(() => icon.remove(), 1000);
    }, 10);
}

// Wait for user interaction to play audio (Fix for autoplay block)
document.addEventListener("click", playAudio);

