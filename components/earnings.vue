<template>
  <div class="comp-container">
      <v-flex class="col-12 ma-auto Usersdata white ">
        <div class="d-flex col-12 flex-column  ">
          <v-container class="pa-5">
          <v-row>
            <div class="d-flex col-8 justify-start  "><span class="comp-title">Estimated earnings</span></div>
            <div class="align-end d-flex col-4 justify-end drop-down ">
              <div class="col-8 pa-0 ">
                  <v-select
                  class="dateSelect"
                  light
                  v-model="items[0]"
                  append-icon="mdi-chevron-down"
                :items="items"
                dense
        ></v-select>
        </div>
            </div>
          </v-row>
          <v-layout class="pt-2">
            <v-flex class="col-3 pa-0">
              <div class="d-flex flex-column">
              <div><span class="comp-label">Adsense</span></div>
                <span class="comp-number" >{{randomv1}} </span>
              <div class="d-flex"><span  class="comp-neg" id="random1Earnings">{{random1Earnings}} ({{randomper}}%)</span></div>
              </div>
            </v-flex>
            <v-flex class="col-3 pa-0">
                <div><span class="comp-label">Affiliate</span></div>
              <div><span class="comp-number"   >{{randomv2}}K</span></div>
              <div class="d-flex"><span  class="comp-pos" id="random2Earnings">{{random2Earnings}} ({{randomper2}}%)</span></div>
            </v-flex>
            <v-flex class="col-3 pa-0">
                <div><span class="comp-label">Product Selling</span></div>
              <div><span class="comp-number" >{{randomv3}}%</span></div>
              <div class="d-flex"><span class="comp-neg" id="random3Earnings" >{{random3Earnings}} ({{randomper3}}%)</span></div>
            </v-flex>
            <v-flex class="col-3 pa-0">
                <div><span class="comp-label">Total Earning</span></div>
              <div><span class="comp-number "  >{{randomv4}}s</span></div>
              <div class="d-flex"><span  class="comp-neg" id="random4Earnings" >{{random4Earnings}} ({{randomper4}}%)</span></div>
            </v-flex>
          </v-layout>
</v-container>

        </div>
      </v-flex>
  </div>
</template>

<script>
  export default {

data(){
  return{
    input:[{selected:2}],
    items:["Last 7 days","Last 30 days" , "Yesterday","Today"],
    random1Earnings:"122",
    random2Earnings:"12",
    random3Earnings:"32",
    random4Earnings:"53",
    // precentage
    randomper:"26",
    randomper2:"12",
    randomper3:"4",
    randomper4:"6",
    // big numbers
    randomv1:"122",
    randomv2:"12",
    randomv3:"32",
    randomv4:"53",
            }
        },

mounted() {
  /* colored */

setInterval(() => {
    const random1Earnings = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
       if (random1Earnings > 0){
         this.randomper = Math.floor(Math.random() * 20 )
    const randomv1 = document.getElementById("random1Earnings")
      randomv1.classList.remove("comp-neg");
         gsap.timeline().fromTo("#random1Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv1.classList.add("comp-pos");
     this.random1Earnings = random1Earnings
     // percetage
} else if(random1Earnings < 0){
     this.randomper = Math.floor(Math.random() * 20 )
  const randomv1 = document.getElementById("random1Earnings")
  randomv1.classList.remove("comp-pos");
   gsap.timeline().fromTo("#random1Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv1.classList.add("comp-neg");
  this.random1Earnings = random1Earnings}
}, 2900);
setInterval(() => {

    const random2Earnings = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
       if (random2Earnings > 0){
          this.randomper2 = Math.floor(Math.random() * 20 )
    const randomv2 = document.getElementById("random2Earnings")
      randomv2.classList.remove("comp-neg");
       gsap.timeline().fromTo("#random2Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv2.classList.add("comp-pos");
     this.random2Earnings = random2Earnings
} else if(random2Earnings < 0){
   this.randomper2 = Math.floor(Math.random() * 20 )
  const randomv2 = document.getElementById("random2Earnings")
  randomv2.classList.remove("comp-pos");
        gsap.timeline().fromTo("#random2Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv2.classList.add("comp-neg");
  this.random2Earnings = random2Earnings
}
}, 2700);
setInterval(() => {
  const random3Earnings = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
       if (random3Earnings > 0){
          this.randomper3 = Math.floor(Math.random() * 20 )
    const randomv3 = document.getElementById("random3Earnings")
      randomv3.classList.remove("comp-neg");
           gsap.timeline().fromTo("#random3Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv3.classList.add("comp-pos");
     this.random3Earnings = random3Earnings
} else if(random3Earnings < 0){

   this.randomper3 = Math.floor(Math.random() * 20 )
  const randomv3 = document.getElementById("random3Earnings")
  randomv3.classList.remove("comp-pos");
       gsap.timeline().fromTo("#random3Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv3.classList.add("comp-neg");
  this.random3Earnings = random3Earnings
}
}, 2300);

setInterval(() => {
  const random4Earnings = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
     if (random4Earnings > 0){
        this.randomper4 = Math.floor(Math.random() * 20 )
    const randomv4 = document.getElementById("random4Earnings")
  randomv4.classList.remove("comp-neg");
      gsap.timeline().fromTo("#random4Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv4.classList.add("comp-pos");

     this.random4Earnings = random4Earnings
} else if(random4Earnings < 0){
   this.randomper4 = Math.floor(Math.random() * 20 )
  const randomv4 = document.getElementById("random4Earnings")
  randomv4.classList.remove("comp-pos");
       gsap.timeline().fromTo("#random4Earnings",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv4.classList.add("comp-neg");
  this.random4Earnings = random4Earnings
}

}, 2600);

// big numbers
setInterval(() => {
    this.randomv1 = Math.floor(Math.random() *520 )
}, 1100);
setInterval(() => {
    this.randomv2 = Math.floor(Math.random() *20 )
}, 1700);
setInterval(() => {
    this.randomv3 = Math.floor(Math.random() *100 )
}, 1600);
setInterval(() => {
    this.randomv4 = Math.round(Math.random() * 120 )

}, 600);

},

  }


</script>

<style  scoped>
.comp-container{
  box-shadow: 2px 2px 4px 3px rgba(5, 51, 237, 0.03)
}
.theme--light.v-input{
  color:transparent !important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
  border-color:transparent !important
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
  border-color:transparent !important
}
</style>
