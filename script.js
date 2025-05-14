let currentLang = "es";

function toggleLanguage() {
    if (currentLang === "es") {
        document.getElementById('subtitle').innerText = "Business Analyst | Change Management | Scrum";
        document.querySelector('.about h2').innerText = "About Me";
        document.querySelector('.about p').innerText = 
            "Business Analyst experienced in service recovery, change request flow, and ticket tracking at Coppel. Great attitude, excellent communication, and results-oriented. Practical knowledge of agile methodologies like SCRUM.";

        document.querySelector('.skills h2').innerText = "Skills";
        const skillsBadges = [
            "SCRUM", "Change Management", "Request Flow", "Service Recovery",
            "Coppel", "Tickets", "Assertive Communication", "Proactivity"
        ];
        const skillsContainer = document.querySelector('.badges');
        skillsContainer.innerHTML = "";
        skillsBadges.forEach(skill => {
            const span = document.createElement("span");
            span.innerText = skill;
            skillsContainer.appendChild(span);
        });

        document.querySelector('.experience h2').innerText = "Experience";
        document.querySelector('.experience h3').innerText = "Business Analyst – Coppel";
        document.querySelector('.experience p').innerText = "2023 – Present";
        document.querySelector('.experience ul').innerHTML = `
            <li>Recovery of critical services with documentation and follow-up.</li>
            <li>Effective change request and ticket flow management.</li>
            <li>Team collaboration under SCRUM methodology.</li>
        `;

        document.querySelector('.education h2').innerText = "Education";
        document.querySelectorAll('.education p')[0].innerText = "Bachelor's Degree in Mechatronics Engineering";
        document.querySelectorAll('.education p')[1].innerText = "Technological Institute of Culiacán";

        document.querySelector('.contact h2').innerText = "Contact";

        currentLang = "en";
    } else {
        location.reload();
    }
}

window.onscroll = function () {
    const goTop = document.getElementById("goTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }

    // Fade-in al hacer scroll
    document.querySelectorAll("section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Agregar clase de animación por defecto
window.onload = () => {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("fade-section");
    });
};
