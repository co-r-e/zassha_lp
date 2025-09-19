const languageToggles = document.querySelectorAll(".language-toggle");

const closeAllMenus = () => {
  languageToggles.forEach((toggle) => {
    const trigger = toggle.querySelector(".language-toggle__button");
    const menu = toggle.querySelector(".language-toggle__menu");
    trigger?.setAttribute("aria-expanded", "false");
    menu?.classList.remove("is-open");
  });
};

if (languageToggles.length) {
  languageToggles.forEach((toggle) => {
    const trigger = toggle.querySelector(".language-toggle__button");
    const menu = toggle.querySelector(".language-toggle__menu");
    const options = Array.from(toggle.querySelectorAll(".language-toggle__option"));

    if (!trigger || !menu) return;

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        trigger.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
      } else {
        closeAllMenus();
        trigger.setAttribute("aria-expanded", "true");
        menu.classList.add("is-open");
      }
    });

    options.forEach((button) => {
      button.addEventListener("click", () => {
        const destination = button.dataset.href;
        if (destination) {
          window.location.href = destination;
        }
      });
    });
  });

  document.addEventListener("click", closeAllMenus);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllMenus();
    }
  });
}

const accordionTriggers = document.querySelectorAll("[data-accordion-trigger]");

if (accordionTriggers.length) {
  accordionTriggers.forEach((button) => {
    if (!button.hasAttribute("aria-expanded")) {
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", (!isExpanded).toString());
    });
  });
}

const heroSection = document.querySelector(".hero");

if (heroSection) {
  const updatePointer = (event) => {
    const rect = heroSection.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    heroSection.style.setProperty("--cursor-x", `${x}%`);
    heroSection.style.setProperty("--cursor-y", `${y}%`);
  };

  heroSection.addEventListener("pointermove", (event) => {
    heroSection.classList.add("has-pointer");
    updatePointer(event);
  });

  heroSection.addEventListener("pointerleave", () => {
    heroSection.classList.remove("has-pointer");
  });
}
