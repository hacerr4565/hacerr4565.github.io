// ================= SKILLS =================

function showText(skill) {

    const text = document.getElementById("skill-text");

    if (skill === "html") {
        text.innerText = "HTML - I use HTML to create the structure of websites.";
    }

    else if (skill === "css") {
        text.innerText = "CSS - I use CSS to make websites beautiful, responsive and interactive.";
    }

    else if (skill === "js") {
        text.innerText = "JavaScript - I use JavaScript to add functionality and animations.";
    }
}


function hideText() {
    document.getElementById("skill-text").innerText = "";
}


// ================= CONTACT FORM =================

const form = document.querySelector(".contact form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all the fields 😊");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address 📧");
            return;
        }

        alert("Thank you " + name + "! Your message has been sent successfully 💜");
        form.reset();
    });
}


// ================= NAVBAR ACTIVE LINK =================

const navLinks = document.querySelectorAll(".a2 a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.style.color = "white";
        });

        this.style.color = "#ff4f81";
    });

});

// ================= SCROLL REVEAL =================

const sections = document.querySelectorAll(
    ".stat, .c3 > div, .skill-box, .d1 > div, .contact-left"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (item) {

    item.style.opacity = "0";
    item.style.transform = "translateY(25px)";
    item.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(item);

});

// st

// ===============================
// LOGIN + CREATE ACCOUNT
// ===============================

const forms = document.querySelectorAll(".p7 form");

forms.forEach(function (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const button = form.querySelector("button");

        if (button.innerText.includes("CREATE")) {

            showPopup(
                "Congratulations! 🎉",
                "Your account has been created successfully."
            );

        } else {

            showPopup(
                "Welcome Back! 💚",
                "Welcome for your comeback!"
            );

        }

    });

});


// ===============================
// SHOW POPUP
// ===============================

function showPopup(title, message) {

    // Create blur layer
    const overlay = document.createElement("div");

    overlay.className = "blur-overlay";

    document.body.appendChild(overlay);


    // Create popup
    const popup = document.createElement("div");

    popup.className = "success-popup";

    popup.innerHTML = `

        <div class="success-icon">
            ✓
        </div>

        <h2>
            ${title}
        </h2>

        <p>
            ${message}
        </p>

        <button class="close-popup">
            OK
        </button>

    `;

    document.body.appendChild(popup);


    // Start animation
    setTimeout(function () {

        overlay.classList.add("show");

        popup.classList.add("show");

    }, 50);

    // ===============================
    // OK BUTTON
    // ===============================

    popup.querySelector(".close-popup").addEventListener(
        "click",
        function () {

            // Form reset
            const currentForm = popup.dataset.form;

            document.querySelectorAll(".p7 form").forEach(function (form) {
                form.reset();
            });

            // Popup close
            popup.classList.remove("show");

            // Blur remove
            overlay.classList.remove("show");

            setTimeout(function () {

                popup.remove();
                overlay.remove();

            }, 400);

        }
    );

}