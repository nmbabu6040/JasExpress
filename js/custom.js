$('.clientSlider').owlCarousel({
    loop:true,
    margin:30,
    items:6,
    smartSpeed: 500,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            
        },
        576:{
            items:3,
            
        },
        768:{
            items:4,
            
        },
        992:{
            items:6,
           
        }
    }
})



$('.testSlider').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    smartSpeed: 500,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        576:{
            items:1,
            
        },
        768:{
            items:1,
            
        },
        992:{
            items:1,
           
        }
    }
})

// Counter js 

// window.addEventListener("scroll", function () {
//     let fxBtn = document.getElementById("fxButton");

//     if (window.scrollY > 200) {
//         fxBtn.classList.add("active");   // spelling ঠিক
//     } else {
//         fxBtn.classList.remove("active");
//     }
// });



const toggle = document.getElementById("togglePassword");
  const pill = document.getElementById("pillS");
  const password = document.getElementById("password");
  const lockIcon = document.getElementById("lockIcon");

  toggle.addEventListener("click", function () {
    const isActive = pill.classList.toggle("active");

    password.type = isActive ? "text" : "password";

    lockIcon.classList.toggle("fa-lock", !isActive);
    lockIcon.classList.toggle("fa-lock-open", isActive);
    lockIcon.classList.toggle("unlocked", isActive);
  });

    

	
