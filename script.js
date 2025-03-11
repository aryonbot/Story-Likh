window.onload = function () {
    // Get canvas element and set up context
    let canvas = document.getElementById("backgroundCanvas");
    let ctx = canvas.getContext("2d");

    // ==== START: Added code for background image fade-in effect ====
    let img = new Image();
    img.src = "spirited_awaybr_disneyscreencaps.com_14367.webp"; // Update path if needed

    img.onload = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.globalAlpha = 0.7; // Lower opacity for background
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.style.opacity = "1"; // Fade in effect
    };
    // ==== END: Added code for background image fade-in effect ====

    // Set volume and play audio when user interacts
    document.getElementById("guitar").volume = 0.5;
    document.getElementById("fire").volume = 0.5;

    // ==== START: Fix autoplay block issue ====
    document.addEventListener("click", function () {
        document.getElementById("guitar").play();
        document.getElementById("fire").play();
    }, { once: true }); // Ensures it runs only once
    // ==== END: Fix autoplay block issue ====

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

    function hideHoverText() {
        document.getElementById("hover-text").style.opacity = 0;
    }

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

    // Attach event listeners
    document.body.onmousemove = showHoverText;
    document.body.onclick = showIcon;
};

