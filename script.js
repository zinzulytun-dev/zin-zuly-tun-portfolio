// ============================================================
// PERSONALIZE THESE DETAILS BEFORE PUBLISHING
// ============================================================
const portfolioConfig = {
  email: "zinzulytun7@example.com",       // Replace with your email
  github: "https://github.com/zinzulytun-dev",
  linkedin: "https://www.linkedin.com/in/zin-zuly-tun-34a417310/",
  facebook: "https://www.facebook.com/share/1FrqFRjxFj/"
};

// Add contact details to the page from the configuration above.
document.getElementById("emailLink").href = `mailto:${portfolioConfig.email}`;
document.getElementById("emailLink").textContent = `${portfolioConfig.email} ↗`;
document.getElementById("githubLink").href = portfolioConfig.github;
document.getElementById("linkedinLink").href = portfolioConfig.linkedin;
document.getElementById("facebookLink").href = portfolioConfig.facebook;

// Footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Dark / light theme. Preference is kept in localStorage in the browser.
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

function updateThemeIcon() {
  themeToggle.textContent =
    document.documentElement.dataset.theme === "light" ? "☾" : "☼";
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  if (nextTheme === "dark") {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("portfolio-theme", "dark");
  } else {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("portfolio-theme", "light");
  }
  updateThemeIcon();
});

// Project category filter.
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// Reveal elements as they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Reading progress bar.
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener(
  "scroll",
  () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
  },
  { passive: true }
);
