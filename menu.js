// Funktion zum Öffnen/Schließen des Hamburger-Menüs
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');

  // Klick auf Menü-Links
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  });

  // Klick irgendwo auf die Seite außerhalb des Menüs oder Hamburger schließt das Menü
  document.addEventListener('click', (e) => {
    if (menu.style.display === 'block' && !menu.contains(e.target) && e.target !== hamburger) {
      menu.style.display = 'none';
    }
  });
});
