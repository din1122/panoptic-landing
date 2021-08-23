var animDataTwo = {
    container: document.getElementById('lottie-coin'),
    path: 'https://assets.lottiefiles.com/datafiles/jORpumH9Yn0XoXQ/data.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "animScrollTwo",
  },
  animScrollTwo, tl;


var animScrollTwo = bodymovin.loadAnimation(animDataTwo)


animScrollTwo.addEventListener('DOMLoaded', function () {
  tl = new TimelineMax({
    repeat: 0
  })
  tl.to({
    frame: animScrollTwo.totalFrames - 1
  }, 1, {
    frame: 0,
    onUpdate: function () {
      animScrollTwo.goToAndStop(Math.round(this.target.frame), true)
    },
    Ease: Linear.easeNone
  })

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: ".env-last",
    offset: 300,
    duration: 6000
  }).setTween(tl).setPin("#lottie-coin").addTo(controller);

})
