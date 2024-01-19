function slide() {
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".navlinks");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}

slide();

// faqs////....

const faqs = document.querySelectorAll(".faqs");

faqs.forEach((faqs) => {
  const icon = faqs.querySelector(".icon");
  const faqans = faqs.querySelector(".faq-ans");

  faqs.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      faqans.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      faqans.style.maxHeight = faqans.scrollHeight + "px";
    }
  });
});

// progressbar/..........


let container = document.querySelector(".container")
let prog = document.querySelector(".prog");
let progresscircle = document.querySelector(".progress-circular");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let value = document.querySelector(".value");
let start = 0;




btn.addEventListener("click",bar);

function bar() {

   let progress = setInterval(() => {

    if (start < input.value)
    {
      start++;
      progressEND();
    }
   else
    {
      start--;
      progressEND(); 
    }

    function progressEND(){
      value.textContent = `${start}%`;
       progresscircle.style.background = `conic-gradient(blueviolet ${
        start * 3.6}deg, whitesmoke 0deg )`
      // progresscircle.style.background = '( _{start*3.6})'
       
            if (start == input.value){
         clearInterval(progress);
         input.value ="";
       }
    }
    
  },60);
 

}




zzzzzzzz
