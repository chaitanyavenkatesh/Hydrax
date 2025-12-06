// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Fix the layout structure immediately
function fixLayout() {
  const compi = document.querySelector('.compi');
  const frame = document.querySelector('.frame');
  const page2 = document.querySelector('.page-2');
  const page4 = document.querySelector('.page-4');
  const page3 = document.querySelector('.page-3');
  const desktop3 = document.querySelector('.desktop-3');
  const desktop32 = document.querySelector('.desktop-32');
  const desktop33 = document.querySelector('.desktop-33');
  const desktop4 = document.querySelector('.desktop-4');
  
  if (!compi) return;
  
  // Reset compi container
  compi.style.cssText = `
    background: #000;
    height: auto;
    position: relative;
    width: 100%;
    overflow-x: hidden;
  `;
  
  // Fix frame (home section)
  if (frame) {
    frame.style.cssText = `
      background: linear-gradient(101.52deg, rgba(99, 117, 131, 1) 0%, rgba(6, 6, 6, 1) 50%, rgba(22, 26, 29, 1) 100%);
      width: 100%;
      max-width: 1440px;
      height: 900px;
      position: relative;
      left: 0;
      top: 0;
      margin: 0 auto;
      overflow: hidden;
    `;
  }
  
  // Fix page-2 container and desktop-3
  if (page2) {
    page2.style.cssText = `
      width: 100%;
      height: auto;
      position: relative;
      margin: 0;
      padding: 0;
    `;
  }
  
  if (desktop3) {
    desktop3.style.cssText = `
      background: linear-gradient(101.52deg, rgba(99, 117, 131, 1) 0%, rgba(6, 6, 6, 1) 50%, rgba(22, 26, 29, 1) 100%);
      width: 100%;
      max-width: 1440px;
      height: 900px;
      position: relative;
      left: 0 !important;
      top: 0 !important;
      margin: 0 auto;
      overflow: hidden;
    `;
  }
  
  // Fix page-4 container and desktop-32
  if (page4) {
    page4.style.cssText = `
      width: 100%;
      height: auto;
      position: relative;
      margin: 0;
      padding: 0;
    `;
  }
  
  if (desktop32) {
    desktop32.style.cssText = `
      background: linear-gradient(101.52deg, rgba(22, 26, 29, 1) 0%, rgba(6, 6, 6, 1) 50%, rgba(99, 117, 131, 1) 100%);
      width: 100%;
      max-width: 1440px;
      height: 900px;
      position: relative;
      left: 0 !important;
      top: 0 !important;
      margin: 0 auto;
      overflow: hidden;
    `;
  }
  
  // Fix page-3 container and desktop-33
  if (page3) {
    page3.style.cssText = `
      width: 100%;
      height: auto;
      position: relative;
      margin: 0;
      padding: 0;
    `;
  }
  
  if (desktop33) {
    desktop33.style.cssText = `
      background: linear-gradient(101.52deg, rgba(99, 117, 131, 1) 0%, rgba(6, 6, 6, 1) 50%, rgba(22, 26, 29, 1) 100%);
      width: 100%;
      max-width: 1440px;
      height: 900px;
      position: relative;
      left: 0 !important;
      top: 0 !important;
      margin: 0 auto;
      overflow: hidden;
    `;
  }
  
  // Fix desktop-4 (games section)
  if (desktop4) {
    desktop4.style.cssText = `
      background: linear-gradient(101.52deg, rgba(99, 117, 131, 1) 0%, rgba(6, 6, 6, 1) 50%, rgba(22, 26, 29, 1) 100%);
      width: 100%;
      max-width: 1440px;
      height: 900px;
      position: relative;
      left: 0 !important;
      top: 0 !important;
      margin: 0 auto;
      overflow: hidden;
    `;
  }
  
  // Clear and rebuild structure
  compi.innerHTML = '';
  
  // Append in correct order
  if (frame) compi.appendChild(frame);
  if (desktop32) compi.appendChild(desktop32);
  if (desktop3) compi.appendChild(desktop3);
  if (desktop33) compi.appendChild(desktop33);
  if (desktop4) compi.appendChild(desktop4);
}

// Navigation handlers
function setupNavigation() {
  // Get all navigation elements
  const navElements = document.querySelectorAll('.home-cards-games, .home-cards-games2, .home-cards-games3, .home-cards-games4, .home-cards-games5, .home-cards-games6');
  
  navElements.forEach(nav => {
    const text = nav.textContent.trim();
    
    // Replace text with clickable spans
    nav.innerHTML = text.split(/\s+/).map(word => {
      const cleanWord = word.toLowerCase();
      if (cleanWord === 'home' || cleanWord === 'cards' || cleanWord === 'games') {
        return `<span class="nav-word" data-nav="${cleanWord}" style="cursor: pointer; display: inline-block;">${word}</span>`;
      }
      return word;
    }).join(' ');
    
    // Add click handlers
    nav.querySelectorAll('.nav-word').forEach(span => {
      span.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = span.getAttribute('data-nav');
        scrollToSection(target);
      });
    });
  });
}

// Scroll to section function
function scrollToSection(section) {
  let targetElement;
  
  switch(section) {
    case 'home':
      targetElement = document.querySelector('.frame');
      break;
    case 'cards':
      targetElement = document.querySelector('.desktop-3');
      break;
    case 'games':
      targetElement = document.querySelector('.desktop-4');
      break;
  }
  
  if (targetElement) {
    const yOffset = 0;
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// Setup "Dive in" buttons
function setupDiveInButtons() {
  const buttons = document.querySelectorAll('.toggle-button-elevated, .toggle-button-elevated2, .toggle-button-elevated3');
  
  buttons.forEach(button => {
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => {
      const desktop32 = document.querySelector('.desktop-32');
      if (desktop32) {
        const yOffset = 0;
        const y = desktop32.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

// Add styles
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #000;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  .compi {
    width: 100%;
    min-height: 100vh;
  }
  
  .nav-word:hover {
    color: #00ffff !important;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    transition: all 0.3s ease;
  }
  
  .toggle-button-elevated:hover .content,
  .toggle-button-elevated2:hover .content,
  .toggle-button-elevated3:hover .content {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
  
  .frame, .desktop-3, .desktop-32, .desktop-33, .desktop-4 {
    display: block !important;
  }
  
  .page-2, .page-3, .page-4 {
    display: block !important;
  }
`;
document.head.appendChild(style);

// Initialize everything
function init() {
  fixLayout();
  setupNavigation();
  setupDiveInButtons();
  console.log('Hydrax website initialized!');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Handle resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    fixLayout();
  }, 250);
});