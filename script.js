const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const forms = document.querySelectorAll("[data-contact-form]");
const filterButtons = document.querySelectorAll("[data-filter]");
const filterItems = document.querySelectorAll("[data-category]");
const dropdowns = document.querySelectorAll("[data-dropdown]");

function updateHeader() {
  if (!header || header.hasAttribute("data-solid-header")) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    header?.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      header?.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      dropdowns.forEach((dropdown) => dropdown.classList.remove("is-open"));
    }
  });
}

dropdowns.forEach((dropdown) => {
  const link = dropdown.querySelector("[data-dropdown-link]");
  if (!link) return;

  link.addEventListener("click", (event) => {
    const isMobileMenu = Boolean(nav?.classList.contains("is-open"));
    if (!isMobileMenu) return;

    if (!dropdown.classList.contains("is-open")) {
      event.preventDefault();
      event.stopPropagation();
      dropdown.classList.add("is-open");
      link.setAttribute("aria-expanded", "true");

      dropdowns.forEach((item) => {
        if (item === dropdown) return;
        item.classList.remove("is-open");
        item.querySelector("[data-dropdown-link]")?.setAttribute("aria-expanded", "false");
      });

      return;
    }
  });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("[data-dropdown]")) return;
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-dropdown-link]")?.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterItems.forEach((item) => {
      const categories = (item.dataset.category || "").split(/\s+/);
      item.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "there").trim();
    const subject = encodeURIComponent(`CARE website enquiry from ${name}`);
    const body = encodeURIComponent(
      Array.from(formData.entries())
        .filter(([, value]) => String(value).trim())
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")
    );
    const status = form.querySelector("[data-form-status]");

    if (status) {
      status.textContent = `Thanks, ${name}. Opening a pre-filled email draft.`;
    }

    window.location.href = `mailto:info@careconstruction.com.au?subject=${subject}&body=${body}`;
    form.reset();
  });
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
