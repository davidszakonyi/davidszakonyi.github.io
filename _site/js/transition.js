document.addEventListener('DOMContentLoaded', function () {
  const cards = Array.from(document.querySelectorAll('.card'));

  function showCard(id) {
    cards.forEach(card => {
      card.style.display = (card.id === id) ? 'block' : 'none';
    });

    // Update active nav link
    document.querySelectorAll('#navi li a').forEach(a => a.classList.remove('navi-active'));
    const navLi = document.getElementById('navi-' + id);
    if (navLi) {
      const link = navLi.querySelector('a');
      if (link) link.classList.add('navi-active');
    }

    // Update URL hash
    const hash = (id === 'home') ? '#' : '#' + id;
    history.pushState(null, document.title, hash);
  }

  // Map nav items → card IDs (must match your existing IDs)
  const navMap = {
    'navi-home': 'home',
    'navi-books': 'books',
    'navi-papers': 'papers',
    'navi-current': 'current',
    'navi-teaching': 'teaching',
    'navi-cv': 'cv',
    'navi-contact': 'contact'
  };

  // Initial view based on hash (or home if none)
  const initial = (window.location.hash || '#').replace('#', '') || 'home';
  showCard(initial);

  // Wire up nav clicks
  Object.entries(navMap).forEach(([navId, cardId]) => {
    const li = document.getElementById(navId);
    if (!li) return;
    const link = li.querySelector('a');
    if (!link) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      showCard(cardId);
    });
  });

  // Handle back/forward buttons
  window.addEventListener('popstate', function () {
    const hash = (window.location.hash || '#').replace('#', '') || 'home';
    showCard(hash);
  });
});