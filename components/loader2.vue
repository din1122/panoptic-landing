<template>
<div class="loader-container" v-if="loading">
    <div class="spinner"></div>
    </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    },
    finish () {
      setTimeout(() => {
        gsap.timeline().to(".loader-container",{opacity:0,ease:Power3,duration:2,onComplete:() => this.loading = false})

 document.getElementsByTagName("html")[0].style.overflowY = "auto";
      }, 2000);
    }
  }
}
</script>



<style lang="scss">
.loader-container{
   position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:999;
    background: white;
}
    .spinner {
        position: absolute;
        height: 60px;
        width: 60px;
        border: 3px solid transparent;
        border-top-color: var(--v-success-base);
        top: 50%;
        left: 50%;
        margin: -30px;
        border-radius: 50%;
        animation: spin 2s linear infinite;
        z-index: 100;

        &:before,
        &:after {
            content: '';
            position: absolute;
            border: 3px solid transparent;
            border-radius: 50%;
        }

        &:before {
            border-top-color: var(--v-error-base);
            top: -12px;
            left: -12px;
            right: -12px;
            bottom: -12px;
            animation: spin 3s linear infinite;
        }

        &:after {
            border-top-color: var(--v-accent-lighten1);
            top: 6px;
            left: 6px;
            right: 6px;
            bottom: 6px;
            animation: spin 4s linear infinite;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
