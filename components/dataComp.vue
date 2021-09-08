<template>
  <div class="comp-container">
      <v-flex class="col-12 ma-auto  white Usersdata">
        <div class="d-flex col-12 flex-column  ">
          <v-container class="pa-5">
          <v-row>
            <div class="d-flex col-8 justify-start  "><span class="comp-title">Users data</span></div>
            <div class="align-end d-flex col-4 justify-end drop-down ">
              <div class="col-8 pa-0 ">
                  <v-select
                  light
                  v-model="dates[0]"
                  append-icon="mdi-chevron-down"
                :items="dates"
                dense
        ></v-select>
        </div>
            </div>
          </v-row>
          <v-layout class="pt-2">
            <v-flex class="col-3 pa-0">
              <div class="d-flex flex-column">
              <div><span class="comp-label">Users</span></div>
                <span class="comp-number" >{{randomv1}} </span>
              <div class="d-flex"><span  class="comp-neg" id="random1">{{random1}} ({{randomper}}%)</span></div>
              </div>
            </v-flex>
            <v-flex class="col-3 pa-0">
                <div><span class="comp-label">Sessions</span></div>
              <div><span class="comp-number"   >{{randomv2}}K</span></div>
              <div class="d-flex"><span  class="comp-pos" id="random2">{{random2}} ({{randomper2}}%)</span></div>
            </v-flex>
            <v-flex class="col-3 pa-0">
                <div><span class="comp-label">Bounce Rate</span></div>
              <div><span class="comp-number" >{{randomv3}}%</span></div>
              <div class="d-flex"><span class="comp-neg" id="random3" >{{random3}} ({{randomper3}}%)</span></div>
            </v-flex>
            <v-flex class="col-3 pa-0">
                <div><span class="comp-label">Session duration</span></div>
              <div><span class="comp-number "  >{{randomv4}}s</span></div>
              <div class="d-flex"><span  class="comp-neg" id="random4" >{{random4}} ({{randomper4}}%)</span></div>
            </v-flex>
          </v-layout>
</v-container>
<div class="ps-5">
           <BarChart :data="barChartData" :options="barChartOptions" :height="100" />
           </div>
        </div>
      </v-flex>
  </div>
</template>

<script>
   import BarChart from "~/components/Chart.vue";
  export default {
components:{
  BarChart
},
data(){
  return{
    dates:["Last 7 days","Last 30 days" , "Yesterday","Today"],
    random1:"122",
    random2:"12",
    random3:"32",
    random4:"53",
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
     barChartData: {
        labels: [
          "30 Apr",
          "1 May",
          "2 May",
          "3 May",
          "4 May",
          "5 May",
          "6 May",
          "7 May",
          "8 May",
          "9 May",
        ],

        datasets: [

          {
            label: "Visualizaciones",
            data: [15, 80, 100, 120, 80, 160, 145, 130, 60, 100, 60],
              pointRadius: 0,
              pointHoverRadius: 10,
              pointBackgroundColor:"#0533ED",
              pointBorderColor:"#fff",
            backgroundColor: "rgba(20, 255, 0, 0)",
            borderColor: "#0533ED",
            borderWidth: 3,

          },
        ],
      },

      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
          hover: {
        mode: 'index',
        intersect: false
      },
        title: {
          display: false,
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#fff",
        titleFontColor: "#6b7280",
        bodyFontColor: "#6b7280",
        },
        scales: {
          xAxes: [

            {
                ticks:{

               fontColor: "#CDCDCD",
            },
              gridLines: {
                 zeroLineColor: 'transparent',

               drawBorder:false,
                color: "#E8E8E8",
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                 fontColor: "#CDCDCD",
                beginAtZero: true,
                max: 200,
                min: 0,
                stepSize: 50,
              },
              gridLines: {
              borderColor: 'transparent',
               drawBorder:false,
                  color: "#E8E8E8",
                display: true,
              },
            },
          ],
        },
      },
    };
},
mounted() {
  /* colored */

setInterval(() => {
    const random1 = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
       if (random1 > 0){
         this.randomper = Math.floor(Math.random() * 20 )
    const randomv1 = document.getElementById("random1")
      randomv1.classList.remove("comp-neg");
          gsap.timeline().fromTo("#random1",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv1.classList.add("comp-pos");
     this.random1 = random1
     // percetage
} else if(random1 < 0){
     this.randomper = Math.floor(Math.random() * 20 )
  const randomv1 = document.getElementById("random1")
  randomv1.classList.remove("comp-pos");
    gsap.timeline().fromTo("#random1",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv1.classList.add("comp-neg");
  this.random1 = random1}
}, 2100);
setInterval(() => {

    const random2 = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
       if (random2 > 0){
          this.randomper2 = Math.floor(Math.random() * 20 )
    const randomv2 = document.getElementById("random2")
      randomv2.classList.remove("comp-neg");
        gsap.timeline().fromTo("#random2",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv2.classList.add("comp-pos");
     this.random2 = random2
} else if(random2 < 0){
   this.randomper2 = Math.floor(Math.random() * 20 )
  const randomv2 = document.getElementById("random2")
  randomv2.classList.remove("comp-pos");
    gsap.timeline().fromTo("#random2",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv2.classList.add("comp-neg");
  this.random2 = random2
}
}, 2700);
setInterval(() => {
  const random3 = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
       if (random3 > 0){
          this.randomper3 = Math.floor(Math.random() * 20 )
    const randomv3 = document.getElementById("random3")
      randomv3.classList.remove("comp-neg");
        gsap.timeline().fromTo("#random3",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv3.classList.add("comp-pos");
     this.random3 = random3
} else if(random3 < 0){
   this.randomper3 = Math.floor(Math.random() * 20 )
  const randomv3 = document.getElementById("random3")
  randomv3.classList.remove("comp-pos");
    gsap.timeline().fromTo("#random3",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv3.classList.add("comp-neg");
  this.random3 = random3
}
}, 2800);

setInterval(() => {
  const random4 = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)
     if (random4 > 0){
        this.randomper4 = Math.floor(Math.random() * 20 )
    const randomv4 = document.getElementById("random4")
  randomv4.classList.remove("comp-neg");
    gsap.timeline().fromTo("#random4",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv4.classList.add("comp-pos");
     this.random4 = random4
} else if(random4 < 0){
   this.randomper4 = Math.floor(Math.random() * 20 )
  const randomv4 = document.getElementById("random4")
  randomv4.classList.remove("comp-pos");
    gsap.timeline().fromTo("#random4",{opacity:0,x:10},{opacity:1,x:0,duration:0.8,ease:Expo.easeOut})
  randomv4.classList.add("comp-neg");
  this.random4 = random4
}

}, 2300);

// big numbers
setInterval(() => {
    this.randomv1 = Math.floor(Math.random() *520 )
}, 2100);
setInterval(() => {
    this.randomv2 = Math.floor(Math.random() *20 )
}, 2700);
setInterval(() => {
    this.randomv3 = Math.floor(Math.random() *100 )
}, 2600);
setInterval(() => {
    this.randomv4 = Math.round(Math.random() * 120 )

}, 2200);

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
