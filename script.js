document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav a");

  // Smooth scroll to sections
  navLinks.forEach(link => {
      link.addEventListener("click", event => {
          event.preventDefault();
          const targetId = event.target.getAttribute("href").slice(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: "smooth",
          });
      });
  });

  // Form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", event => {
      event.preventDefault();
      alert("¡Gracias por contactarme! Me pondré en contacto contigo pronto.");
      form.reset();
  });
});
