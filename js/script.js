$( document ).ready(function() {
    $('.count').counterUp({
        delay:100,
        time:3000
    });
  });

  let mybutton = document.getElementById('myBtn');

  //when the user scrolls down by 20px from the top show the button

  window.addEventListener('scroll', function() {
      // second condition for mozilla
        if(window.pageYOffset > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
  });

  // core functionality

  function topFunction(){
      document.body.scrollTop = 0; // for safari
      document.documentElement.scrollTop = 0; // for chrome, firefox, IE and opera
  }
