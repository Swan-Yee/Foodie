var animation = bodymovin.loadAnimation({
      // animationData: { /* ... */ },
      container: document.getElementById('loading-container'), // required
      path: 'https://assets1.lottiefiles.com/packages/lf20_rvfycj0u.json', // required
      renderer: 'svg', // required
      loop: true, // optional
      autoplay: true, // optional
      name: "Demo Animation", // optional
  });

$(window).on("load", function () {
    $('.loader-container').hide(1000,function () {
        $(this).remove();
    });
});

let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top");

let headerControl = new Waypoint({
  element: document.getElementById('about'),
  handler: function (direction) {
    
    if (direction === "down") {
        header.classList.add("shadow");
        header.classList.add("animate__fadeInDown");
        scrollToTop.classList.remove("d-none");
        scrollToTop.classList.add("animate__fadeInUp");      
    } else {
      header.classList.remove("shadow");
      header.classList.add("animate__fadeInDown");
      scrollToTop.classList.add("d-none");
      scrollToTop.classList.add("animate__fadeInUp");      
    }
  },
  offset: '75%'
})

ScrollReveal(
  {
    origin: "top",
    distance: "30px",
    duration: 1000,
    reset: true
  }
).reveal('.content', {
  interval: 200
});
