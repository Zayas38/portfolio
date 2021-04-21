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


// -------------------- MENU CARDS FROM SANCHOS MOCKUP PAGE-----------------

$(document).ready(function() {
    $(".myvideos").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
  })




  // ----------------- SIGN UP FORM WEBSITE ANIMATION -------------------


const form = document.querySelector(".form-box");
const title = document.querySelector(".title");


const tl = new TimelineMax();


tl.fromTo(title, 2, { x: "-500%" }, { x: "0%", ease: Power2.easeInOut})

// tl.fromTo(title, 2, { y: "0%" }, { y: "100%", ease: Power2.easeInOut})

tl.fromTo(form, 3, { y: "-500%" }, { y: "0%", ease: Power2.easeInOut}, "-=1");




// ----------------- SIGN UP FORM CHECKBOX --------------------



const submit = document.querySelector(".submit-button");

function disableSubmit() {
    submit.disabled = true;
   }
  
    function activateButton(element) {
  
        if(element.checked) {
          submit.disabled = false;
         }
         else  {
          submit.disabled = true;
        }
  
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
    



 