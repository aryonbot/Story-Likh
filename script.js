// Set audio volume and play the background sounds
document.getElementById("guitar").volume = 0.5;
document.getElementById("fire").volume = 0.5;
document.getElementById("guitar").play();
document.getElementById("fire").play();
// Function to play audio on user interaction
function playAudio() {
    let guitar = document.getElementById("guitar");
    let fire = document.getElementById("fire");

    guitar.volume = 0.5;
    fire.volume = 0.5;

    guitar.play().catch(error => console.log("Guitar audio blocked:", error));
    fire.play().catch(error => console.log("Fire audio blocked:", error));

    // Remove event listener after first interaction
    document.removeEventListener("click", playAudio);
}

// Wait for a user interaction to start audio
document.addEventListener("click", playAudio);

// Show hover text effect when mouse moves
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

// Hide hover text when mouse is over the navbar
function hideHoverText() {
    document.getElementById("hover-text").style.opacity = 0;
}

// Show floating C icon when clicking anywhere
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
