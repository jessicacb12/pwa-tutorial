document.addEventListener("DOMContentLoaded", function() {
  // nav menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "right" });
  // add recipe form
  const forms = document.querySelectorAll(".side-form");
  M.Sidenav.init(forms, { edge: "left" });

  const testLinkRedirect = document.getElementById('test_window');
  testLinkRedirect.addEventListener('click', () => window.open(window.location.hostname + '/pages/contact.html', '_blank'));
});
