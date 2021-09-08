<template>
  <v-app>
    <v-app-bar id="menu" app class="menu transparent-menu elevation-0">
      <v-container>
        <v-layout row wrap >
          <v-flex>
            <a :href="links[0].link"><img class="panoptic-logo" src="/logo.svg" alt="panoptic"></a>

          </v-flex>
          <v-flex row class="align-center justify-end " >
            <ul style="list-style:none;">

              <li class="pr-5" style="display:inline" v-for="link in links" :link="link" v-show="link.show">
                <a class="menu-link" :href="link.link">
                {{ link.name }}
                </a>
              </li>
            </ul>
          </v-flex>
</v-layout>


      </v-container>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">

        <!-- If using vue-router -->
        <router-view></router-view>
        <v-footer padless class="white">
          <v-flex class="col-12">
          <v-layout class="px-5 py-5">
            <v-flex class="col-3 offset-md-1 justify-center align-center d-flex flex-column">
            <img src="logo-b.svg" class="w-50">
            </v-flex>
             <v-flex class="col-2" >
              <span class="fw-bold">About</span>
              <p class="pt-3">
                Digital Assets management platform that will help you track and get insight on your
multiple assets and services.
              </p>
            </v-flex>
            <v-flex class="col-2 offset-md-1">
              <span class="fw-bold">Menu</span>
              <ul style="list-style:none;" class="pa-0 pt-3 ">
                <li class="py-1 " v-for="link in links" :key="link">
                    <a class="footer-links" :href="link.link">
                {{ link.name }}
                </a>
                   </li>
              </ul>
            </v-flex>
            <v-flex class="col-2">
           <span class="fw-bold">Newsletter</span>

            <v-text-field light class="text-dark" label="Your email address"></v-text-field>
            <div class="d-flex col-8  justify-space-between">
              <v-icon>mdi-facebook</v-icon>
              <v-icon>mdi-twitter</v-icon>
              <v-icon>mdi-linkedin</v-icon>
              <v-icon>mdi-youtube</v-icon>
            </div>
            </v-flex>
          </v-layout>
          </v-flex>
          <div class="d-flex bg-primary">
          <v-container class=" text-white">
          <v-row class="footer-2-links">
            <v-col>
              <span class="text-white px-3">Contact us</span>
                <a href="#" class="text-white px-3"><span>Office@panoptic.com</span></a>
            </v-col>
            <v-flex class="col-3">
          <a href="#" class="text-white px-3"><span>Terms of use</span></a>
            <a href="#" class="text-white px-3"><span>FQA</span></a>
            </v-flex>
          </v-row>
          </v-container>
          </div>
        </v-footer>
      </v-container>
    </v-main>



  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            name: 'Home',
            link: '#home',
            show:false,
          },
          {
            name: 'Features',
            link: '#features',
            show:true,
          },
          {
            name: 'How it works',
            link: '#how-it-works',
             show:true,
          },
          {
            name: 'About us',
            link: '#contact',
             show:true,
          },
          {
            name: 'Try our demo',
            link: '#contact',
             show:true,
          },
          {
            name: 'Contact us',
            link: '#contact',
             show:true,
          },
        ]
      }
    },
    mounted() {
      gsap.set(".menu",{height:"120px"})
       gsap.set('.theme--light.v-toolbar.v-sheet', {backgroundColor:"transparent"})
      var menu = document.getElementById("menu")
      setTimeout(() => {
          ScrollTrigger.create({
     trigger: "#features",
     refreshPriority: 1,
        start:'center center',
        endTrigger: '.v-footer',
        end:'0% center',
      onEnter: () => {
      gsap.to('.theme--light.v-toolbar.v-sheet', {backgroundColor:"#2C00EC",duration:0.2,ease:Power2})
          gsap.to('.panoptic-logo', {scale:0.8 ,duration:0.2,ease:Power2})
      gsap.to('.menu', {height:'80px',ease:Power2,duration:0.2})
      },
      onLeave: () => {

            gsap.to('.theme--light.v-toolbar.v-sheet', {backgroundColor:"transparent",duration:0.2,ease:Power2})
            gsap.to('.panoptic-logo', {scale:1 ,duration:0.2,ease:Power2})
           gsap.to('.menu', {height:'120px',ease:Power2,duration:0.5})
        },
      onLeaveBack: () => {
                   gsap.to('.theme--light.v-toolbar.v-sheet', {backgroundColor:"transparent",duration:0.2,ease:Power2})
                       gsap.to('.panoptic-logo', {scale:1 ,duration:0.2,ease:Power2})
         gsap.to('.menu', {height:'120px',ease:Power2,duration:0.5})
        }
        ,
       onEnterBack: () => {
        gsap.to('.theme--light.v-toolbar.v-sheet', {backgroundColor:"#2C00EC",duration:0.2,ease:Power2})
                gsap.to('.panoptic-logo', {scale:0.8 ,duration:0.2,ease:Power2})
           gsap.to('.menu', {height:'80px',ease:Power2,duration:0.5})
         },
     scrub:1,
    toggleActions: "play reverse play reverse",

});
      }, 3000);

    },



  }

</script>

<style lang="scss" scoped>

</style>
