document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("project-selector");
    const projects = document.querySelectorAll(".project-item");

    // Cacher tous les projets au départ
    projects.forEach(p => p.style.display = "none");

    selector.addEventListener("change", () => {
        const selected = selector.value;

        projects.forEach(project => {
            project.style.display = project.id === selected ? "block" : "none";
        });
    });
});
