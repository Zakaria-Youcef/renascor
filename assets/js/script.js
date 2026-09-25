
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  const tabs = document.querySelectorAll(".contact-subject-tabs span");
  const subjectField = document.querySelector("#subject-hidden");
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      if (subjectField) subjectField.value = tab.textContent;
    });
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const status = document.querySelector("#form-status");
      status.textContent = "Thank you. Your message has been received — our team will contact you shortly.";
      status.style.color = "#D4AF37";
      form.reset();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
