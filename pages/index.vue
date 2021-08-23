<template>
  <div>
    <section class="bg-hero hero-env">
      <div id="lottie-hero">
        <div class="overflow">
          <v-container fill-height>
            <v-layout wrap>
              <v-flex xs6 class="justify-center flex-column d-flex">
                <div>
                  <p class="text-white" style="font-size:4em">Digital Assets Platform</p>
                  <p>Certe, inquam, pertinax non recusandae itaque earum rerum facilis est consec. Laudem et impetus quo
                    aut
                    in gravissimo bello animadversionis.</p>
                  <v-flex  class="pt-5">
                    <v-btn class="mr-5 main-btn elevation-0">Register now</v-btn>
                    <v-btn class="mr-5 main-btn-2 elevation-0">Register now</v-btn>
                  </v-flex>
                </div>
              </v-flex>
              <v-flex>

              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </section>
    <section class=" feature white">
      <v-container>
        <v-layout>
          <v-flex class="pt-5 md4 justify-center d-flex flex-column">
            <div class="flex-column d-flex black--text">
              <p style="font-size:2em">Manage all your assets
                from one place</p>
              <p>Certe, inquam, pertinax non recusandae itaque earum rerum facilis est consec. Laudem et impetus quo aut
                in gravissimo bello animadversionis.</p>
            </div>
            <div>
              <v-btn class="mr-5 main-btn elevation-0">Register now</v-btn>
            </div>
          </v-flex>
          <v-flex class="offset-md4">
            <v-img src="/components.png" max-height="450" max-width="550"> </v-img>
          </v-flex>

        </v-layout>
      </v-container>
    </section>
    <section class=" feature-2 white">
      <v-layout>
        <v-flex class=" md4">
          <img src="/dashboard2.png" class="phone-img"> </img>
        </v-flex>
        <v-flex class="pt-5 md3 offset-md3 justify-center d-flex flex-column">
          <div class="flex-column d-flex black--text">
            <p style="font-size:2em">Manage all your assets
              from one place</p>
            <p>Certe, inquam, pertinax non recusandae itaque earum rerum facilis est consec. Laudem et impetus quo aut
              in gravissimo bello animadversionis.</p>
          </div>
          <div>
            <v-btn class="mr-5 main-btn elevation-0">Register now</v-btn>
          </div>
        </v-flex>

      </v-layout>
    </section>
    <Scroll />
    <section class="feature white">
      <v-layout>
        <v-flex class="md-4 ma-auto rounded black--text ">
          <v-layout>
            <div class="elevation-3 contact-container ma-auto d-flex justify-space-around   flex-row col-4  rounded">
              <div class="d-flex flex-column">
                <span class="text-white font-weight-bold" style="font-size:4em">Register</span>
                <span class="text--black">lorune ipsum dksmskm</span>
              </div>
              <div class="col-5">
                <span>E-mail</span>
                <v-text-field light class="text-dark" label="Your email address"></v-text-field>
                <v-btn class="mr-5 main-btn elevation-0">Register now</v-btn>
              </div>
            </div>

          </v-layout>
        </v-flex>

      </v-layout>
    </section>
  </div>
</template>

<script>
  import Scroll from '@/components/scroll';
  export default {

    component: {
      Scroll
    },
    mounted(){


      var animDataHero = lottie.loadAnimation( {
          container: document.getElementById('lottie-hero'),
          path: 'hero.json',
          renderer: 'svg',
          loop: true,
          autoplay: true,
          name: "heroAnimation",
        })

    }
  }


</script>
