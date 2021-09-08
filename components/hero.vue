<template>
  <div>
    <section id="home" class="bg-hero hero-env">
      <div id="lottie-hero">
        <div class="overflow">
          <v-container  fill-height>
            <v-layout wrap>
              <v-flex xs5 class="justify-center flex-column d-flex text-white">
                <div>
                  <p class="text-white fw-bold  " style="font-size:4em">Digital Assets Platform</p>
                  <div class='col-10 pa-0 pb-5'>
                  <p style="font-size:20px;">Digital Assets management platform that will help you track and get insight on your multiple assets and services.
                  Save time tracking your assets.</p>
                    </div>
                  <v-flex  class="pt-5">
                    <v-btn :loading="btnLoading4" @click="loader = 'btnLoading4'"  class="mr-5 main-btn elevation-0">Register now</v-btn>
                    <v-btn :loading="btnLoading5" @click="loader = 'btnLoading5'"  class="mr-5 main-btn-2 elevation-0">Register now</v-btn>
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
  </div>
</template>

<script>
  export default {
    data(){
      return{
        loader:null,
      btnLoading4:false,
      btnLoading5:false,
      }
    },
    watch:{
        loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
    },
     mounted() {
       var anim;
       var animData = {
 container: document.getElementById('lottie-hero'),
          path: 'hero-1.json',
          renderer: 'svg',
          loop: true,
          autoplay: false,
          name: "heroAnimation",}
      anim = lottie.loadAnimation(animData);
      anim.addEventListener('DOMLoaded',function(){
    anim.playSegments([0,129],true);
});
  }
  }
</script>

<style lang="scss" scoped>

</style>
