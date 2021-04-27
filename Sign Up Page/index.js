
// ----------------- WEBSITE ANIMATION -------------------


const form = document.querySelector(".form-box");
const title = document.querySelector(".title");


const tl = new TimelineMax();


tl.fromTo(title, 2, { x: "-500%" }, { x: "0%", ease: Power2.easeInOut})

// tl.fromTo(title, 2, { y: "0%" }, { y: "100%", ease: Power2.easeInOut})

tl.fromTo(form, 3, { y: "-500%" }, { y: "0%", ease: Power2.easeInOut}, "-=1");




// ----------------- CHECKBOX --------------------



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