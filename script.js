// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });
});


// Function to toggle light mode
function toggleLightMode() {
  const body = document.body;
  const logoLight = document.querySelector('.logo-light');
  const logoDark = document.querySelector('.logo-dark');

  if (body.classList.contains('light-mode')) {
    logoLight.style.filter = 'invert(0)'; // Set filter to invert for dark mode
    logoDark.style.filter = 'invert(1)';  // Set filter to invert for light mode
  } else {
    logoLight.style.filter = 'invert(1)';  // Set filter to invert for light mode
    logoDark.style.filter = 'invert(0)'; // Set filter to invert for dark mode
  }

  body.classList.toggle('light-mode');
}

// Event listener to toggle light mode when 'Right Control' key is pressed
document.addEventListener('keydown', function (event) {
  if (event.code === 'ControlRight') {
    toggleLightMode();
  }
});

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    // Show reminder message as an alert

      alert("Transition to **Light mode** by clicking the bottom right floating button | Or click on the right control button on your keyboard");

    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
};

//cursor js
const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 48;
const diameter = radius * 2;

const customCursor = document.querySelector("#custom-cursor");
customCursor.style.width = `${diameter}px`;
customCursor.style.height = `${diameter}px`;

const text = "AMAN — AMAN — AMAN — AMAN — ";
const characters = text.split("");

const deltaAngle = 360 / characters.length;
const characterOffsetAngle = 8;
let currentAngle = -90;

characters.forEach((character, index) => {
  const span = document.createElement("span");
  span.innerText = character;
  const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
  const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

  const transform = `translate(${xPos}px, ${yPos}px)`;
  const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
  span.style.transform = `${transform} ${rotate}`;

  currentAngle += deltaAngle;
  customCursor.appendChild(span);
});

// Create a center dot
const centerDot = document.createElement("span");
centerDot.innerText = "✧";
centerDot.style.position = "absolute";
centerDot.style.top = "50%";
centerDot.style.left = "50%";
centerDot.style.transform = "translate(-50%, -50%)";
centerDot.style.fontSize = "20px";
customCursor.appendChild(centerDot);

// Update cursor position based on mouse movement
document.addEventListener("mousemove", (event) => {
  customCursor.style.left = `${event.clientX}px`;
  customCursor.style.top = `${event.clientY}px`;
});

//cursor js ends

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});


// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const logoLight = document.querySelector('.logo-light');
  const logoDark = document.querySelector('.logo-dark');

  if (body.classList.contains('light-mode')) {
    logoLight.style.filter = 'invert(0)'; // Set filter to invert for dark mode
    logoDark.style.filter = 'invert(1)';  // Set filter to invert for light mode
  } else {
    logoLight.style.filter = 'invert(1)';  // Set filter to invert for light mode
    logoDark.style.filter = 'invert(0)'; // Set filter to invert for dark mode
  }

  body.classList.toggle('light-mode');
  updateToggleBtnIcon();
}

// Function to update toggle button icon
function updateToggleBtnIcon() {
  const body = document.body;
  const toggleModeBtn = document.querySelector(".toggle-mode-btn");

  if (body.classList.contains('light-mode')) {
    // Light mode is active, set moon icon
    toggleModeBtn.innerHTML = '☀️';
  } else {
    // Dark mode is active, set sun icon

    toggleModeBtn.innerHTML = '🌙';
  }
}

// Event listener to toggle light mode when 'Right Control' key is pressed
document.addEventListener('keydown', function (event) {
  if (event.code === 'ControlRight') {
    toggleLightMode();
  }
});

// Add event listener to the toggle button
toggleModeBtn.addEventListener('click', function() {
  if (body.classList.contains('light-mode')) {
    toggleDarkMode();
  } else {
    toggleLightMode();
  }
});

// Function to handle floating buttons positioning
function updateFloatingButtonsPosition() {
  const floatingButtons = document.querySelector(".floating-buttons");
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const offset = 20;

  floatingButtons.style.bottom = `${offset}px`;
  floatingButtons.style.right = `${offset}px`;

  if (windowWidth <= 768) {
    // Adjust positioning for smaller screens
    floatingButtons.style.bottom = `${offset + 60}px`;
    floatingButtons.style.right = `${offset + 20}px`;
  }
}
