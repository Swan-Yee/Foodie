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
    $('.loader-container').hide(3000,function () {
        $(this).remove();
    });
});