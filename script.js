   
 window.onload = function() {
//     var typed = new Typed('#element', {
//         strings: ['Full Stack Learner', 'Java Learner', 'Photography Enthusiast'],
//         typeSpeed: 50,
//         backSpeed: 25,
//         loop: true
//     });
// };
// ---------- Typing Animation ----------
var typed = new Typed("#element", {
  strings: [
    "a Web Development learner 💻",
    "a Java Programme learner ☕",
    "into Photography 📸"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
})};

// ---------- Smooth Scrolling ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------- Reveal Animations on Scroll ----------
const revealElements = document.querySelectorAll(
  ".learning-card, .project-card, .service-box, .about-container, .leftsection, .rightsection"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => observer.observe(el));

// ---------- Scroll to Top Button ----------
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
})
