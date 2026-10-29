// Site scripts: abstract toggles and spam-resistant email links.

function toggleContent(button) {
  var content = button.nextElementSibling;
  var open = button.classList.toggle('active');
  button.setAttribute('aria-expanded', open ? 'true' : 'false');
  content.style.display = open ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  // The address never appears in the page source; it is assembled here from reversed pieces.
  var parts = ['moc', 'liamg', 'iynokazsdivad'];
  var rev = function (t) { return t.split('').reverse().join(''); };
  var addr = rev(parts[2]) + String.fromCharCode(64) + rev(parts[1]) + '.' + rev(parts[0]);
  document.querySelectorAll('.js-email').forEach(function (a) {
    a.setAttribute('href', 'mai' + 'lto:' + addr);
    if (a.hasAttribute('data-show-address')) a.textContent = addr;
  });
});
