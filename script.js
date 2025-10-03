document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("project-selector");
    const projects = document.querySelectorAll(".project-item");

    
    projects.forEach(project => {
        project.style.display = "block";
    });

  
    selector.addEventListener("change", (e) => {
        if (e.target.value) {
            const selectedProject = document.getElementById(e.target.value);
            if (selectedProject) {
                selectedProject.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center'
                });
            }
        }
    });
});

window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('nav');
    if (window.scrollY > 35) { 
        logo.style.opacity = '0';
        logo.style.visibility = 'hidden';
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
    } else {
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
    }
});
