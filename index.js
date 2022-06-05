function reveal() {
    var reveals = document.querySelectorAll(".reveal, .social-icon-box ");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }     
  
  window.addEventListener("scroll", reveal);



 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//for second drop down button

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionA() {
  document.getElementById("myDropdown-2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdownA = dropdowns[i];
      if (openDropdownA.classList.contains('show')) {
        openDropdownA.classList.remove('show');
      }
    }
  }
}

//for third drop down button

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionB() {
  document.getElementById("myDropdown-3").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdownB = dropdowns[i];
      if (openDropdownB.classList.contains('show')) {
        openDropdownB.classList.remove('show');
      }
    }
  }
}

//for fouth drop down button

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionC() {
  document.getElementById("myDropdown-4").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-4')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdownC = dropdowns[i];
      if (openDropdownC.classList.contains('show')) {
        openDropdownC.classList.remove('show');
      }
    }
  }
}