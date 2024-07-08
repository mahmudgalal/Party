/// <reference types="../@types/jquery" />

$("a[href^='#']").on("click", function (e) {
  let aHref = e.target.getAttribute("href");
  let scrollTo = $(aHref).offset().top;
  $("body , html").animate({ scrollTop: scrollTo }, 1000);
});

$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();
  let homeScroll = $(".home").offset().top;
  if (scroll > homeScroll) {
    $(".open span").css("backgroundColor", "black");
  } else {
    $(".open span").css("backgroundColor", "transparent");
  }
});

$(".close , .open").on("click", function () {
  $(".toggle-menu").animate({ width: "toggle" }, 500);
});

$(".singer").on("click", function () {
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
  $(this).children("p").slideToggle();
  $(this).siblings().children("p").slideUp();
});

// Duration
const date = new Date("Jan 01, 2025 00:00:00").getTime();

$(window).on("load", function () {
  const counter = setInterval(() => {
    const now = new Date().getTime();
    const duration = date - now;
    let day = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hour = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let min = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((duration % (1000 * 60)) / 1000);

    $(".day").html(`${day} d`);
    $(".hour").html(`${hour} h`);
    $(".min").html(`${min} m`);
    $(".sec").html(`${sec} s`);
    if (duration < 0) {
      clearInterval(counter);
      $(".day").html("The");
      $(".hour").html("Counter");
      $(".min").html("is");
      $(".sec").html("Ended");
    }
  }, 1000);
});

let char = 100;
textArea = $("textarea");
textArea.on("input" , function () { 
  let charNeeded = char - textArea.val().length;
  if(charNeeded <= 0) {
    $("#chars").html("your available character finished");
  }else{
    $("#chars").html(charNeeded);
  }
 })