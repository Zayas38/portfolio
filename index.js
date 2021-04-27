    // ------------------ NAV BAR PORTFOLIO PAGE ------------------


window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
});


function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}
    
    
    
    
    // ------------------ TEXT ROTATOR PORTFOLIO PAGE ------------------
    var text = document.getElementById('text');

    var word = text.getElementsByTagName('span');
        
    var i = 0;
        
    function rotator() {
      word[i].style.display = 'none';
      i = (i + 1) % word.length;
      word[i].style.display = "initial";
        
    }
    setInterval(rotator, 2000);