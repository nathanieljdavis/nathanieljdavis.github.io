document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");
  const viewportBorder = document.querySelector(".viewport-border");

  const borderColors = {
    home: "#c6432f",     
    featured: "#de771b",    
    photos: "#6baf86",
    bibliography: "#f2a019", 
    projects: "#339db3",
    contact: "#3d72a4"   
  };

  window.addEventListener("scroll", () => {
    let current = "";

    // Identify which section is in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    // Highlight active nav link
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

    // Update border color
    if (current && borderColors[current]) {
      viewportBorder.style.borderColor = borderColors[current];
      viewportBorder.style.boxShadow = `0 0 25px ${borderColors[current]}88`;
    }
  });
});

function copyToClipboard() {
  const first = document.getElementById('firstName').value.trim();
  const last = document.getElementById('lastName').value.trim();
  const topic = document.getElementById('topic').value.trim();
  const affiliation = document.getElementById('affiliation').value.trim();

  if (!first || !last || !topic || !affiliation) {
    alert('Please fill out all fields.');
    return;
  }

  const formattedText = `${first} ${last} -- ${topic} -- ${affiliation}`;

  // Copy text to clipboard
  navigator.clipboard.writeText(formattedText)
    .then(() => {
      const popup = document.getElementById('popup');
      popup.classList.add('show');
      setTimeout(() => popup.classList.remove('show'), 2000);
    })
    .catch(err => console.error('Clipboard copy failed:', err));
}