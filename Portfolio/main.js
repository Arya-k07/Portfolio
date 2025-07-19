// Function to open a modal by ID
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
  }
}

// Function to close a modal by ID
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Optional: Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = "none";
    });
  }
});
// Smooth scroll behavior for nav links
document.querySelectorAll('.navlist a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
document.getElementById('workBtn').addEventListener('click', function () {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('projectsBtn').addEventListener('click', function () {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});