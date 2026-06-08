/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});


/* ==========================
   SCROLL ANIMATION
========================== */

const cards = document.querySelectorAll(
    '.project-card, .skill-card'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position =
            card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            card.classList.add('show');

        }

    });

});

/* Trigger animation for visible cards on page load */

window.dispatchEvent(new Event('scroll'));


/* ==========================
   CONTACT FORM HANDLING
========================== */

const form = document.getElementById("contact-form");

if(form){

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        const successMessage =
            document.getElementById("successMessage");

        try{

            const response = await fetch(
                "http://localhost:5000/contact",
                {
                    method: "POST",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        message
                    })
                }
            );

            const data = await response.json();

            successMessage.innerText =
                "🚀 Message Sent! Thanks for reaching out.";

            successMessage.style.color =
                "#00ff99";
            form.reset();

        }
        catch(error){

            successMessage.innerText =
                "❌ Failed to send message. Please try again.";

            successMessage.style.color =
                "#ff4d4d";

            console.error(error);

        }

    });

}
