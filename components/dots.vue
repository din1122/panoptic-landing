<template>
  <div>
   <div id="dots-bg"></div>
  </div>
</template>

<script>
  export default {
    mounted(){
           lottie.loadAnimation( {
          container: document.getElementById('dots-bg'),
          path: 'dots.json',
          renderer: 'svg',
          loop: true,
          autoplay: true,

        })
    }
  }
</script>

<style lang="scss" scoped>

</style>
