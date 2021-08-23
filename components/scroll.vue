<template>
  <div>
    <section class="lottie-env env-last">
      <div id="lottie-coin">
        <div class="overflow">
            <v-container fluid fill-height>
        <v-layout wrap justify-center align-center fill-height>
          <v-flex class="md4 offset-lg-2  ">

          </v-flex>

          <div class="steps-container d-flex col-6 flex-column fill-height justify-center">
            <div class="d-flex col-6 offset-2 flex-column align-center fill-height justify-center steps-container-m">
            <div class="box">

              <p class="text-white" style="font-size:28px">How it works</p>
              <div class="col-12 pa-0">
              <p>Intrudicing the most comftorble signup you will ever expericed which at the end of it you will control all your services from one single dashboard.</p>
                </div>



              </div>

            <div class="box1">
              <p class="text-white" style="font-size:28px">Add assets</p>
              <div class="col-8 pa-0">
              <p>Connect your assets and get insights from their data. Connect as many as you want and get full scope on all of them from the panoptic mode.</p>
                </div>
                <div class="d-flex pt-4">


              </div>
              </div>
            <div class="box2">
              <p class="text-white" style="font-size:28px">Integrate services & Create automation</p>
              <div class="col-8 pa-0">
              <p>Integrate all your favorite services and create custom notification from the data you get. easily created automation from Panoptic mode on the platform.</p>
                </div>
                <div class="d-flex pt-4">

</div>
              </div>
              </div>
        </div>

        </v-layout>
          </v-container>

        </div>
      </div>

    </section>
    <span class="a" style="visabillity:none;">rigger</span>

  </div>
</template>

<script>
  export default {
    props: {},

    mounted() {
      gsap.registerPlugin(ScrollTrigger);



// const tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".b",
//     start: "1800px",
//      scrub:1,
//     markers: true
//   }
// });
// const tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".c",
//     start: "2800px",
//      scrub:1,
//     markers: true
//   }
// });


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".a",
    start: "1600px center",
    end:"2000px center",
    scrub:1,

    toggleActions: "play reverse none none",
  }
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".a",
    start: "3000px center",
     end:"3600px center",
    scrub:1,

    toggleActions: "play reverse play reverse",
  }
});
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".a",
    start: "4300px center",
     end:"5000px center",
    scrub:1,

    toggleActions: "play reverse play reverse",
  }
});




gsap.set('.box1', {
  opacity: 0
})

gsap.set('.box2', {
  opacity: 0
})

tl2
.to('.box',{opacity:1,duration:3})

tl5

.to('.box',{opacity:0.1, y:-160,duration:'6000',ease: 'Power1.easeInOut'})
// .fromTo('.box',{opaicty:1},{'-webkit-mask-image': '-webkit-linear-gradient(bottom, black, transparent)' ,y:-160,duration:'6000',ease: 'Power1.easeInOut'})
.fromTo('.box1',{opacity:0},{delay:3,opacity:1,yPercent:-85,duration:'8000',ease: 'Power1.easeInOut'})
.fromTo('.box2',{opacity:0},{yPercent:-80,opacity:0.2,duration:'6000',ease: 'Power1.easeInOut'})

tl6.to('.box',{opacity:0,yPercent:-80,duration:'6000',ease: 'Power1.easeInOut'})
.to('.box1',{opacity:0.1,yPercent:-160,duration:'4000',ease: 'Power1.easeInOut'})
.to('.box2',{yPercent:-140,opacity:1,duration:'3000',ease: 'Power1.easeInOut'})

// tl2.fromTo(".box",{yPercent: 0, opacity: 0}, {opacity: 1,yPercent: -20, duration: 2,
// ease: "expo"
// })

// tl5.to('.box',{opacity:0.2,yPercent:-80,duration:20}).to('.box1',{opacity:1,yPercent:-40,duration:3})

// tl3.fromTo(".box1",{opacity: 0}, {opacity: 1, duration: 2,})
// tl4.fromTo(".box2",{opacity: 0}, {opacity: 1, duration: 2,})



      var animDataTwo = {
          container: document.getElementById('lottie-coin'),
          path: 'steps.json',
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
            animScrollTwo.goToAndStop(Math.round(this.progress() * 100), true)
          },
       ease: 'Power1.easeInOut'
        })

        var controller = new ScrollMagic.Controller();

        var scene = new ScrollMagic.Scene({
          triggerElement: ".env-last",
         triggerHook:0,
          duration: '6000'
        }).setTween(tl).setPin("#lottie-coin").addTo(controller);
      })
    }
  }

</script>

<style lang="scss" scoped>

</style>
