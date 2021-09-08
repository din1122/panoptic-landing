<template>
  <div v-if="isLoading">
<Hero />
    <section id="features" class=" feature">
      <v-container >
        <v-layout>
          <v-flex class="pt-5 col-3 justify-center d-flex flex-column ">

            <div class="flex-column d-flex black--text ">
              <p class="features-title  fw-bold mb-5 ">Manage all your assets
                from one place</p>
              <p >Certe, inquam, pertinax non recusandae itaque earum rerum facilis est consec. Laudem et impetus quo aut
                in gravissimo bello animadversionis.</p>
            </div>
            <div>
              <v-btn  :loading="btnLoading7" @click="loader = 'btnLoading7'"  class=" mt-5 mr-5 main-btn elevation-0">Register now</v-btn>
            </div>
          </v-flex>
          <div class="pos-relative">
            <img src="bg1.png" class="dots-img">
            </div>
          <v-flex class="col-7 offset-md-2 components-container">
            <DataComp class="mb-5" />
            <Earnings />
            <!-- <v-img src="/components.png" max-height="650" max-width="750"> </v-img> -->
          </v-flex>

        </v-layout>
      </v-container>
    </section>

    <section id="features-2" class=" feature-2 ">

      <v-layout>
        <v-flex class=" md4 offset-md-2">
            <div class="pos-relative">
            <img src="bg1.png" class="dots-img2">
            </div>
          <img src="/reg.png" class="phone-img">
        </v-flex>
        <v-flex class="pt-5 md3 offset-md-1 justify-center d-flex flex-column">
          <div class="flex-column d-flex black--text">
            <p  class="features-title fw-bold">Manage all your assets
              from one place</p>
            <p>Certe, inquam, pertinax non recusandae itaque earum rerum facilis est consec. Laudem et impetus quo aut
              in gravissimo bello animadversionis.</p>
          </div>
          <div>
            <v-btn :loading="btnLoading1" @click="loader = 'btnLoading1'" class="mr-5 main-btn elevation-0">Register now</v-btn>
          </div>
        </v-flex>

      </v-layout>
    </section>
    <Scroll />


    <!-- <section id="video" class="">
         <v-layout>

        <v-flex class="pt-5 md3 offset-md3 justify-center d-flex flex-column">
          <div class="flex-column d-flex black--text">
            <p style="font-size:2em">Manage all your assets
              from one place</p>
            <p>Certe, inquam, pertinax non recusandae itaque earum rerum facilis est consec. Laudem et impetus quo aut
              in gravissimo bello animadversionis.</p>
          </div>
          <div>
            <v-btn :loading="btnLoading3" @click="loader = 'btnLoading3'"  class="mr-5 main-btn elevation-0">Register now</v-btn>
          </div>
        </v-flex>
         <v-flex class=" md4" style="height:40vh; padding:50px;89dwibgjkbgjkbgjkbgjkbgjkbgjkbgjkbgjkbgjkbgjkbgjkbgjkheftr">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5cxceKzQvE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-flex>

      </v-layout>
    </section> -->

    <section class="freehand">
      <v-flex class="col-6 ma-auto ">
        <div class="text-center ">
        <h1 class="pb-5 features-title ">Try our Freehand demo</h1>
        <p>No need to sign-up to try use our most special  feature on our platform.  our Panoptic freehand mode is now possible. you can create automations, notifications, view your data. all included in demo mode.</p>
</div>

      </v-flex>
      <Freehand />
    </section>
        <section id="contact" class="contact  ">

      <v-layout>
        <v-flex class="md-4 ma-auto rounded text-dark ">

            <div class=" prim-shadow  contact-container ma-auto d-flex   flex-row col-5  rounded">

              <v-layout wrap>
              <v-flex class="col-10">
                <span class="text-dark font-weight-bold" style="font-size:4em">Register Now</span>
              </v-flex>
              <div class="col-12 d-flex flex-row">
                <div class="col-6 d-flex flex-column ">
                    <div><v-icon class="pr-2 pb-2">mdi-check</v-icon><span >30 days free trail</span></div>
                    <div><v-icon class="pr-2 pb-2">mdi-check</v-icon><span >No credit-card needed</span></div>
                    <div><v-icon class="pr-2 pb-2">mdi-check</v-icon><span >Fast registration</span></div>
                    <div><v-icon class="pr-2 pb-2">mdi-check</v-icon><span >Save money and man power</span></div>
                  </div>
              <div class="col-6">
                <span>E-mail</span>
                <v-text-field light class="text-dark" label="Your email address"></v-text-field>
                <div class="d-flex">
                <v-btn :loading="btnLoading2" @click="loader = 'btnLoading2'"  class="ml-auto  main-btn elevation-0">Register now</v-btn>
                </div>
              </div>
              </div>


              </v-layout>
            </div>
    <div class="pos-relative">
            <img src="bg1.png" class="dots-img-contact">
            </div>

        </v-flex>

      </v-layout>
    </section>
  </div>

</template>

<script>

  import Freehand from '@/components/freehand';
  import Earnings from '@/components/earnings';
  import DataComp from '@/components/dataComp';
  import Scroll from '@/components/scroll';
  import Hero from '@/components/hero';
  import Dots from '@/components/dots';

  export default {
data() {
  return{
    loader: null,
    btnLoading1:false,
    btnLoading2:false,
    btnLoading3:false,
    btnLoading7:false,
isLoading: false
  }

},
    component: {
      Scroll,Hero,Dots,DataComp,Earnings,Freehand
    },
watch: {
   loader() {
     console.log("runed");
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
},
    mounted() {

    lottie.loadAnimation( {
          container: document.getElementById('dots-bg-2'),
          path: 'dots.json',
          renderer: 'svg',
          loop: true,
          autoplay: true,
        })
         this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() =>  this.isLoading = true ,this.$nuxt.$loading.finish(),3000)
        })
    }
  }


</script>
