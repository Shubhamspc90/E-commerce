// Function to show the relevant section when an anchor link is clicked
function showSection(sectionId) {
    // First, hide all sections
    const allSections = document.querySelectorAll(".trend, #mainPage, #aboutSection, #contactSection");
    allSections.forEach(section => {
      section.style.display = "none";
    });
  
    // Now, show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = "block";
    }
  }
  
  // Initially show the Home page (mainPage)
  document.addEventListener('DOMContentLoaded', function() {
    showSection('mainPage'); // Show the home page by default
  });
  

