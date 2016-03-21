

var showTarget = function(){
  $(".target").addClass("looking");
};

var hideTarget = function(){
  $(".target").removeClass("looking");
};

var slideDropdown = function(){
  $("dropdown").slideDown();
};

var hideDropdown = function() {
  $("dropdown").slideUp();
};


//make sure page has loaded
$(document).ready(function(){
  $("#page-photo").hover(showTarget, hideTarget);
})

//when you click, stop box on location
$("#page-photo").click(function(){
  //if has class, remove class
  //else add class
})

//when you click, creates a tag

