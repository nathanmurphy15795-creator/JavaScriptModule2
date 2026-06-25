// =========================
// DOM Loaded
// =========================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Fontaines D.C. site loaded successfully!");
});


// =========================
// Dark Mode Toggle
// =========================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Optional: store preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}


// =========================
// Album Rating Feature
// =========================

const rateBtn = document.getElementById("rateAlbum");
const ratingMsg = document.getElementById("ratingMessage");
const albumSelect = document.getElementById("albumChoice");

if (rateBtn) {
    rateBtn.addEventListener("click", () => {

        const selectedAlbum = albumSelect ? albumSelect.value : "Unknown";

        if (ratingMsg) {
            ratingMsg.textContent =
                `⭐ You rated: ${selectedAlbum}. Thanks for your vote!`;
        }
    });
}


// =========================
// Artwork Button Feature
// =========================

const artworkBtn = document.getElementById("artworkBtn");
const artworkMsg = document.getElementById("artworkMessage");

if (artworkBtn) {
    artworkBtn.addEventListener("click", () => {

        if (artworkMsg) {
            artworkMsg.textContent =
                "🎨 Favourite artwork: Skinty Fia (most iconic visual identity).";
        }
    });
}


// =========================
// Contact Form Validation
// =========================

const form = document.getElementById("contactForm");

if (form) {

    const charCount = document.getElementById("charCount");
    const messageBox = document.getElementById("message");

    // Live character counter
    const messageInput = document.getElementById("message");

    if (messageInput && charCount) {
        messageInput.addEventListener("input", () => {
            charCount.textContent =
                `Characters: ${messageInput.value.length}`;
        });
    }

    // Submit handler
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name.length < 2) {
            alert("Please enter a valid name (at least 2 characters).");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters.");
            return;
        }

        if (messageBox) {
            messageBox.textContent =
                "✅ Thanks! Your message has been sent successfully.";
        }

        form.reset();

        if (charCount) {
            charCount.textContent = "Characters: 0";
        }
    });
}