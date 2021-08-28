$(document).ready(function () {
  // Navbar stuff
  
  // On desktop devices
  // Adding or Removing active class to navbar items
  $('.home-nav li a').click(function(){
    $('.home-nav li a').removeClass("active");
    $(this).addClass("active");
  });

  // On mobile devices
  // Open or Close navigation menu
  $("#navicon").click(function () {
    $(".home-nav").toggleClass("home-nav-toggle");
  });

  // On mobile devices
  // Close navigation menu when one of the pages' sections is clicked
  $(".home-nav ul li a").click(function () {
    $(".home-nav").removeClass("home-nav-toggle");
  });
});