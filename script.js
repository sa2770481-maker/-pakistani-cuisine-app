// Basic JS for mobile nav toggle and form demo
document.addEventListener('DOMContentLoaded', function(){
  function setupToggle(toggleId, navId){
    var toggle = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    if(!toggle || !nav) return;
    toggle.addEventListener('click', function(){
      nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'flex';
    });
    // close when clicking a link (helpful on mobile)
    Array.from(nav.querySelectorAll('a')).forEach(function(a){
      a.addEventListener('click', function(){ if(window.innerWidth <= 600) nav.style.display='none'; });
    });
  }

  setupToggle('navToggle','nav');
  setupToggle('navToggleAbout','navAbout');
  setupToggle('navToggleDishes','navDishes');
  setupToggle('navToggleGallery','navGallery');
  setupToggle('navToggleContact','navContact');

  // Simple contact form handler (demo only)
  window.handleSubmit = function(e){
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var result = document.getElementById('formResult');
    if(!name || !email || !message){
      result.textContent = 'Please fill all fields.';
      result.style.color = 'crimson';
      return;
    }
    result.textContent = 'Thanks ' + name + '! Your message was sent (demo).';
    result.style.color = 'green';
    e.target.reset();
  };

  // Optional: highlight active link based on page
  var path = location.pathname.split('/').pop();
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(link){
    var href = link.getAttribute('href');
    if(href === path) { link.classList.add('active'); }
  });
});