```javascript
/* ==========================================
   SHECONNECT
   Developed by Shivangi Prajapati
   Deeksha Saxena
   Divyanshi Yadav
========================================== */


/* =========================
   SELECT ELEMENTS
========================= */

const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const toast = document.getElementById("toast");


/* =========================
   MOBILE MENU
========================= */

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
      menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

      icon.classList.remove("fa-bars");

      icon.classList.add("fa-xmark");

    } else {

      icon.classList.remove("fa-xmark");

      icon.classList.add("fa-bars");

    }

  });


  /* Close menu after clicking a link */

  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon =
          menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

      });

    });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

function updateNavbar() {

  if (!navbar) return;

  if (window.scrollY > 30) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateNavbar
);

updateNavbar();


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


function updateActiveLink() {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 140;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
        sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach((link) => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if (
      href === `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  updateActiveLink
);


/* =========================
   SMOOTH SCROLL
========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {

    anchor.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {

          event.preventDefault();

          return;

        }


        const target =
          document.querySelector(targetId);

        if (!target) {

          event.preventDefault();

          return;

        }


        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      }
    );

  });


/* =========================
   MODAL FUNCTIONS
========================= */

function openModal(modalId) {

  const modal =
    document.getElementById(modalId);

  if (!modal) return;

  modal.classList.add("active");

  document.body.style.overflow =
    "hidden";

}


function closeModal(modalId) {

  const modal =
    document.getElementById(modalId);

  if (!modal) return;

  modal.classList.remove("active");

  document.body.style.overflow =
    "";

}


/* =========================
   JOIN MODAL
========================= */

const openJoin =
  document.getElementById("openJoin");

const openJoinBottom =
  document.getElementById("openJoinBottom");

const footerJoin =
  document.getElementById("footerJoin");


function showJoinModal(event) {

  if (event) {
    event.preventDefault();
  }

  openModal("joinModal");

}


if (openJoin) {

  openJoin.addEventListener(
    "click",
    showJoinModal
  );

}

if (openJoinBottom) {

  openJoinBottom.addEventListener(
    "click",
    showJoinModal
  );

}

if (footerJoin) {

  footerJoin.addEventListener(
    "click",
    showJoinModal
  );

}


/* =========================
   SUPPORT MODAL
========================= */

const openSupport =
  document.getElementById("openSupport");

if (openSupport) {

  openSupport.addEventListener(
    "click",
    () => {

      openModal("supportModal");

    }
  );

}


/* =========================
   REPORT MODAL
========================= */

const openReport =
  document.getElementById("openReport");

const footerReport =
  document.getElementById("footerReport");


function showReportModal(event) {

  if (event) {
    event.preventDefault();
  }

  openModal("reportModal");

}


if (openReport) {

  openReport.addEventListener(
    "click",
    showReportModal
  );

}

if (footerReport) {

  footerReport.addEventListener(
    "click",
    showReportModal
  );

}


/* =========================
   CLOSE MODALS
========================= */

document
  .querySelectorAll("[data-close]")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const modalId =
          button.getAttribute(
            "data-close"
          );

        closeModal(modalId);

      }
    );

  });


/* Close modal when clicking outside */

document
  .querySelectorAll(".modal")
  .forEach((modal) => {

    modal.addEventListener(
      "click",
      (event) => {

        if (
          event.target === modal
        ) {

          closeModal(
            modal.id
          );

        }

      }
    );

  });


/* Close modal with Escape */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      document
        .querySelectorAll(".modal.active")
        .forEach((modal) => {

          closeModal(
            modal.id
          );

        });

    }

  }
);


/* =========================
   JOIN FORM
========================= */

const joinForm =
  document.getElementById("joinForm");

if (joinForm) {

  joinForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const name =
        document
          .getElementById("joinName")
          .value
          .trim();


      closeModal("joinModal");


      showToast(
        `Welcome to SheConnect, ${name}! 💜`
      );


      joinForm.reset();

    }
  );

}


/* =========================
   SUPPORT OPTIONS
========================= */

const supportOptions =
  document.querySelectorAll(
    ".support-option"
  );


supportOptions.forEach((option) => {

  option.addEventListener(
    "click",
    () => {

      const supportType =
        option.getAttribute(
          "data-support"
        );


      closeModal("supportModal");


      showToast(
        `${supportType} selected. We're here for you 💗`
      );

    }
  );

});


/* =========================
   REPORT FORM
========================= */

const reportForm =
  document.getElementById(
    "reportForm"
  );


if (reportForm) {

  reportForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      closeModal(
        "reportModal"
      );


      showToast(
        "Your concern has been submitted. Thank you for speaking up 💜"
      );


      reportForm.reset();

    }
  );

}


/* =========================
   TOAST
========================= */

let toastTimer;


function showToast(message) {

  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 3500);

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(
    ".feature-card, .community-item, .resource-card, .testimonial, .about-point"
  );


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (
          entry.isIntersecting
        ) {

          entry.target.style.opacity =
            "1";

          entry.target.style.transform =
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(
  (element) => {

    element.style.opacity =
      "0";

    element.style.transform =
      "translateY(18px)";

    element.style.transition =
      "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(
      element
    );

  }
);


/* =========================
   STATS COUNTER
========================= */

const statNumbers =
  document.querySelectorAll(
    ".stat strong"
  );


let statsStarted = false;


function animateStats() {

  if (statsStarted) return;

  statsStarted = true;


  statNumbers.forEach(
    (number) => {

      const target =
        Number(
          number.getAttribute(
            "data-target"
          )
        );


      let current = 0;

      const duration =
        1300;

      const startTime =
        performance.now();


      function update(currentTime) {

        const progress =
          Math.min(
            (currentTime - startTime) /
              duration,
            1
          );


        const eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );


        current =
          Math.floor(
            eased * target
          );


        number.textContent =
          current.toLocaleString();


        if (
          progress < 1
        ) {

          requestAnimationFrame(
            update
          );

        } else {

          number.textContent =
            target.toLocaleString();

        }

      }


      requestAnimationFrame(
        update
      );

    }
  );

}


const statsSection =
  document.querySelector(
    ".stats-section"
  );


if (statsSection) {

  const statsObserver =
    new IntersectionObserver(
      (entries) => {

        if (
          entries[0].isIntersecting
        ) {

          animateStats();

          statsObserver.disconnect();

        }

      },
      {
        threshold: 0.4
      }
    );


  statsObserver.observe(
    statsSection
  );

}


/* =========================
   BUTTON RIPPLE
========================= */

document
  .querySelectorAll(".btn")
  .forEach((button) => {

    button.addEventListener(
      "click",
      function (event) {

        const ripple =
          document.createElement(
            "span"
          );


        ripple.style.position =
          "absolute";

        ripple.style.borderRadius =
          "50%";

        ripple.style.pointerEvents =
          "none";


        const rect =
          this.getBoundingClientRect();


        const size =
          Math.max(
            rect.width,
            rect.height
          );


        ripple.style.width =
          `${size}px`;

        ripple.style.height =
          `${size}px`;

        ripple.style.left =
          `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
          `${event.clientY - rect.top - size / 2}px`;

        ripple.style.background =
          "rgba(255,255,255,0.25)";

        ripple.style.transform =
          "scale(0)";

        ripple.style.animation =
          "rippleEffect 0.6s linear";


        this.style.position =
          "relative";

        this.style.overflow =
          "hidden";


        this.appendChild(
          ripple
        );


        setTimeout(
          () => {

            ripple.remove();

          },
          650
        );

      }
    );

  });


/* =========================
   RIPPLE ANIMATION
========================= */

const rippleStyle =
  document.createElement(
    "style"
  );


rippleStyle.textContent = `
  @keyframes rippleEffect {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`;


document.head.appendChild(
  rippleStyle
);


/* =========================
   WELCOME MESSAGE
========================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        showToast(
          "Welcome to SheConnect 💜 Connect. Support. Rise together."
        );

      },
      1000
    );

  }
);


/* =========================
   CONSOLE BRANDING
========================= */

console.log(
  "%cSheConnect 💜",
  "font-size: 22px; font-weight: bold; color: #8b5cf6;"
);

console.log(
  "%cDeveloped by Shivangi Prajapati • Deeksha Saxena • Divyanshi Yadav",
  "font-size: 13px; color: #ec4899;"
);
```
