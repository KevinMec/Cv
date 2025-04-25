let currentLang = "en";

function toggleLanguage() {
    if (currentLang === "en") {
        // Cambios generales
        document.getElementById('subtitle').innerText = "Desarrollador Full Stack | Automatización y Datos";
        document.getElementById('about-title').innerText = "Sobre Mí";
        document.getElementById('about-text').innerText = "Desarrollador Full Stack con más de 5 años de experiencia en aplicaciones web escalables. Experto en Angular, React, Java y TypeScript.";

        document.getElementById('skills-title').innerText = "Habilidades";
        document.getElementById('exp-title').innerText = "Experiencia";
        document.getElementById('edu-title').innerText = "Educación";
        document.getElementById('contact-title').innerText = "Contacto";
        document.getElementById('projects-title').innerText = "Mis Proyectos";

        // Experiencia
        document.querySelectorAll('.experience h3')[0].innerText = "Desarrollador Full Stack Senior – Tech Solutions Inc.";
        document.querySelectorAll('.experience h3')[1].innerText = "Desarrollador Front End – Web Creatives";
        document.querySelectorAll('.experience ul')[0].innerHTML = `
            <li>Desarrollo de aplicaciones web con Angular y Java Spring Boot.</li>
            <li>Implementación de interfaces con React y TypeScript.</li>
        `;
        document.querySelectorAll('.experience ul')[1].innerHTML = `
            <li>Creación de interfaces dinámicas con React y Redux.</li>
            <li>Optimización de aplicaciones para velocidad y escalabilidad.</li>
        `;

        // Educación
        document.querySelector('.education p').innerText = "Licenciatura en Ciencias de la Computación";
        document.querySelectorAll('.education p')[1].innerText = "Universidad de Tecnología, 2013 – 2017";

        // Proyectos Cards
        document.querySelectorAll('.card h3')[0].innerText = "Desarrollos Web";
        document.querySelectorAll('.card h3')[1].innerText = "Desarrollos .NET";
        document.querySelectorAll('.card h3')[2].innerText = "Dashboards";

        currentLang = "es";
    } else {
        location.reload();  // Vuelve a inglés
    }
}

window.onscroll = function() {
    const goTop = document.getElementById("goTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
