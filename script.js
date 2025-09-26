
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebarMenu');
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const sidebarLinks = document.querySelectorAll('.sidebar-links a');
  if (openBtn && sidebar) {
    openBtn.addEventListener('click', function () {
      sidebar.classList.add('open');
      document.body.classList.add('sidebar-open');
    });
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', function () {
      sidebar.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    });
  }
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
      sidebar.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabbed-slide-section').forEach(tabbedSection => {
    const tabBtns = tabbedSection.querySelectorAll('.tab-btn');
    const tabContents = tabbedSection.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
       
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        tabContents.forEach(tc => {
          if (tc.id === tab) tc.classList.add('active');
        });
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const animatedSections = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-down, .fade-in-zoom, .fade-in-rotate');
  function onScroll() {
    animatedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        section.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll(); 
});

const typing = document.querySelector(".typing");
const text = typing.textContent;
typing.textContent = "";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
