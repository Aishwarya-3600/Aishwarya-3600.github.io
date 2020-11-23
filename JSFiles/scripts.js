/*function f1(){
var About = document.getElementById("about");
var More = document.getElementById("more");
var Contact = document.getElementById("contact");
if (About.style.display === "none"){
    About.style.display = "block";
}
else{
    More.style.display =
    Contact.style.display = 
}
  }*/
  /*$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});*/

  
  
  $("#about").click(function(){
    $("#about").show();
    $("#more").hide();
    $("#contact").hide();
  });

