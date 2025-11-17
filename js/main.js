// Main JavaScript file for the POWER DRINK website

// DOM Elements
const loader = document.querySelector(".loader");
const progressBar = document.querySelector(".progress-bar");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");
const ctaButton = document.querySelector(".cta-button");
const sections = document.querySelectorAll("section");
const productImage = document.querySelector(".product-image");
const svgContainer = document.querySelector(".svg-container");
const energyLines = document.querySelector("#energy-lines");
const particlesContainer = document.querySelector("#particles-container");

// Variables
let scrollY = window.scrollY;
let currentSection = 0;

// GSAP Timeline
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

// Initialize the page
window.addEventListener("DOMContentLoaded", init);

// Initialize function
function init() {
  // Simulate loading
  simulateLoading();

  // Setup event listeners
  setupEventListeners();

  // Create energy effects
  createEnergyEffects();

  // Create particles
  createParticles();
}

// Simulate loading progress
function simulateLoading() {
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 5;
    gsap.to(progressBar, {
      width: `${progress}%`,
      duration: 0.2,
    });

    if (progress >= 100) {
      clearInterval(progressInterval);

      // Hide loader after a delay
      setTimeout(() => {
        gsap.to(loader, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            loader.style.display = "none";
            // Start intro animation
            introAnimation();
          },
        });
      }, 500);
    }
  }, 100);
}

// Intro animation
function introAnimation() {
  // Animate the hero content
  tl.from(".hero h1", { y: 100, opacity: 0, duration: 1 })
    .from(".hero h2", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
    .from(".hero p", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
    .from(".cta-button", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
    .from(".scroll-indicator", { opacity: 0, duration: 0.8 }, "-=0.3");

  // Animate the glow effect
  gsap.from(".glow-effect", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    ease: "power2.out",
    delay: 0.3,
  });

  // Animate the product image with a more dynamic entrance
  gsap.from(productImage, {
    y: -30,
    x: 20,
    opacity: 0,
    rotation: 15,
    scale: 0.8,
    duration: 1.8,
    ease: "elastic.out(1, 0.3)",
    delay: 0.5,
    onComplete: () => {
      // Add floating animation to product image after the intro animation completes
      animateProductImage();
      // Animate energy lines
      animateEnergyLines();
    },
  });
}

// Floating animation for the product image
function animateProductImage() {
  // Create a more subtle and complex floating animation
  const floatingTl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  floatingTl
    .to(productImage, {
      y: 10,
      rotation: 2,
      duration: 2.5,
      ease: "sine.inOut",
    })
    .to(productImage, {
      y: -5,
      rotation: -1,
      duration: 2,
      ease: "sine.inOut",
    })
    .to(productImage, {
      y: 0,
      rotation: 0,
      duration: 1.5,
      ease: "sine.inOut",
    });

  // Animate glow effect
  gsap.to(".glow-effect", {
    scale: 1.2,
    opacity: 0.7,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

// Create energy lines around the product
function createEnergyEffects() {
  // Create horizontal lines
  for (let i = 0; i < 8; i++) {
    const line = document.createElement("div");
    line.className = "energy-line energy-horizontal";
    line.style.top = `${Math.random() * 100}%`;
    line.style.left = `${Math.random() * 50}%`;
    energyLines.appendChild(line);
  }

  // Create vertical lines
  for (let i = 0; i < 8; i++) {
    const line = document.createElement("div");
    line.className = "energy-line energy-vertical";
    line.style.top = `${Math.random() * 50}%`;
    line.style.left = `${Math.random() * 100}%`;
    energyLines.appendChild(line);
  }

  // Create particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "energy-particle";
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    energyLines.appendChild(particle);
  }
}

// Animate energy lines
function animateEnergyLines() {
  // Animate horizontal lines
  const horizontalLines = document.querySelectorAll(".energy-horizontal");
  horizontalLines.forEach((line, index) => {
    gsap.set(line, {
      width: 0,
      opacity: 0,
    });

    gsap.to(line, {
      width: `${50 + Math.random() * 50}%`,
      opacity: 0.7,
      duration: 0.5 + Math.random() * 1,
      delay: index * 0.2,
      repeat: -1,
      repeatDelay: 3 + Math.random() * 5,
      yoyo: true,
      ease: "power2.inOut",
    });
  });

  // Animate vertical lines
  const verticalLines = document.querySelectorAll(".energy-vertical");
  verticalLines.forEach((line, index) => {
    gsap.set(line, {
      height: 0,
      opacity: 0,
    });

    gsap.to(line, {
      height: `${30 + Math.random() * 70}%`,
      opacity: 0.7,
      duration: 0.5 + Math.random() * 1,
      delay: index * 0.2 + 1,
      repeat: -1,
      repeatDelay: 3 + Math.random() * 5,
      yoyo: true,
      ease: "power2.inOut",
    });
  });

  // Animate particles
  const particles = document.querySelectorAll(".energy-particle");
  particles.forEach((particle, index) => {
    gsap.to(particle, {
      opacity: 0.8,
      scale: 1.5,
      duration: 1 + Math.random() * 2,
      delay: index * 0.1,
      repeat: -1,
      repeatDelay: 1 + Math.random() * 3,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
}

// Create background particles
function createParticles() {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random size between 2px and 6px
    const size = 2 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `-${size}px`;

    // Random animation properties
    particle.style.setProperty(
      "--particle-duration",
      `${5 + Math.random() * 15}s`
    );
    particle.style.setProperty(
      "--particle-distance",
      `${100 + Math.random() * 900}px`
    );
    particle.style.setProperty(
      "--particle-opacity",
      `${0.3 + Math.random() * 0.7}`
    );

    // Add delay
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Toggle navigation menu on burger click
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    // Burger animation
    burger.classList.toggle("toggle");

    // Animate links
    navLinksItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });

  // Close menu when a link is clicked
  navLinksItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });

  // Scroll event for parallax and section detection
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;

    // Add background to nav when scrolled
    if (scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // Update current section
    updateCurrentSection();

    // Update SVG position based on scroll
    updateSvgPosition();
  });

  // CTA button click
  ctaButton.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Update current section based on scroll position
function updateCurrentSection() {
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = index;
    }
  });

  // Animate section content when it comes into view
  animateSectionContent(sections[currentSection]);
}

// Animate section content when it comes into view
function animateSectionContent(section) {
  // Check if section has already been animated
  if (section.classList.contains("animated")) return;

  // Add animated class to prevent re-animation
  section.classList.add("animated");

  // Animate section elements
  const elements = section.querySelectorAll(
    "h2, h3, p, .feature, .benefit, .stat, .contact-form, .contact-info"
  );

  gsap.from(elements, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
  });
}

// Update product image position based on scroll
function updateSvgPosition() {
  if (!productImage || !svgContainer) return;

  // Calculate progress through the page (0 to 1)
  const scrollProgress =
    scrollY / (document.body.scrollHeight - window.innerHeight);

  // Calculate the visible portion of the page
  const viewportHeight = window.innerHeight;
  const heroSection = document.querySelector(".hero");
  const heroRect = heroSection.getBoundingClientRect();

  // Only show the product image when the hero section is visible
  if (heroRect.bottom > 0 && heroRect.top < viewportHeight) {
    // Calculate how far the hero section has scrolled out of view (0 to 1)
    const heroVisibility =
      1 - Math.max(0, Math.min(1, -heroRect.top / heroRect.height));

    // Apply parallax effect to the product image with improved positioning
    gsap.to(productImage, {
      y: heroVisibility * 20, // Subtle vertical movement
      rotation: 5 * heroVisibility, // Reduce rotation as it scrolls out
      scale: Math.max(0.7, 1 - scrollProgress * 0.2), // Don't scale down too much
      opacity: heroVisibility, // Fade out as hero scrolls away
      filter: `drop-shadow(0 0 ${Math.max(
        5,
        25 * heroVisibility
      )}px rgba(0, 255, 0, ${Math.max(0.2, 0.6 * heroVisibility)}))`,
      duration: 0.3,
    });

    // Apply parallax effect to energy lines
    gsap.to(energyLines, {
      opacity: heroVisibility * 0.8,
      scale: Math.max(0.8, 1 - scrollProgress * 0.3),
      duration: 0.3,
    });

    // Apply parallax effect to glow
    gsap.to(".glow-effect", {
      opacity: heroVisibility * 0.7,
      scale: Math.max(1, 1.5 - scrollProgress * 0.5),
      duration: 0.3,
    });

    // Make product image visible
    productImage.style.visibility = "visible";
    energyLines.style.visibility = "visible";
  } else {
    // Hide product image when hero is not visible
    productImage.style.visibility = "hidden";
    energyLines.style.visibility = "hidden";
  }

  // Add mouse movement effect to the hero section
  heroSection.addEventListener("mousemove", (e) => {
    if (!productImage) return;

    // Get mouse position
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    // Apply subtle movement based on mouse position
    gsap.to(productImage, {
      x: mouseX * 20,
      y: mouseY * 20,
      rotation: mouseX * 5,
      duration: 1,
      ease: "power2.out",
    });

    // Move glow effect slightly
    gsap.to(".glow-effect", {
      x: mouseX * 30,
      y: mouseY * 30,
      duration: 1.5,
      ease: "power2.out",
    });
  });
}
