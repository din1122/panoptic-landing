<template>
  <div>
    <v-flex class="col-8 ma-auto ">

      <div class="main-con ma-5 box-shadow">
            <div style="padding:25px; display:flex; flex-direction:row;">
              <img src="icons/dots.svg" class="pr-2">
              <div class="top-banner"
              ></div>
      </div>
        <div class="dots-bg">
        <v-card class="box-shadow" width="56px" >
          <v-navigation-drawer floating  mini-variant
          mini-variant-width="56">
              <v-list-item rounded v-for="item in items" :key="item.title" link>
                <img :src="item.svg">
                  <!-- <v-icon src="">{{ item.icon }}</v-icon> -->
              </v-list-item>
          </v-navigation-drawer>
        </v-card>

      <div style="
    position: absolute;
width:100%;
    top:600px;
     left:-100px;
">
                 <div class="earnings" ref="parentEl">
           <movable :bounds="{x:[-200,750],y:[-370,360]}" @start="classFire()" @complete="completed()" class="modaltitle" target="parentEl" id="clicked"></movable>
      <Earnings  />
         </div>
         </div>
               <div style="
    position: absolute;
width:100%;
    top:100px;
    left:500px;
">
                 <div class="data"  ref="parentEl2">
           <movable    :bounds="{x:[-600,250],y:[-95,440]}" @start="classFire1()" @complete="completed1()" class="modaltitle" target="parentEl2" id="clicked1"></movable>
        <UsersData />
         </div>
         </div>
         </div>
              <!-- <movable  posTop="-250" posLeft="500" :bounds="{x:[-500,150],y:[-250,250]}" class="user-movable"> -->

           <!-- <movable class="testmove" :bounds="{x:[-400,1020],y:[-420,400]}"><span>Shift Key Behavior</span></movable> -->

      </div>
    </v-flex>

  </div>
</template>

<script>
import UsersData from "@/components/dataComp.vue"
import Earnings from "@/components/earnings.vue"
  export default {
    components:{
      Earnings,UsersData
    },
data(){
  return{
  items: [
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/symbol-logo.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/hamburger.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/search.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/doc.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/users.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/bell.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/dashboard.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/chev.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/add.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/user-circle.svg" },
          { title: 'Home', icon: 'mdi-view-dashboard' ,svg:"/icons/question.svg" },
        ],
        }
},
methods:{
  classFire(){
    const clicked = document.getElementById("clicked")
      clicked.classList.add("clicked")
  },
  completed(){
    const clicked = document.getElementById("clicked")
      clicked.classList.remove("clicked")
  },
  classFire1(){
    const clicked = document.getElementById("clicked1")
      clicked.classList.add("clicked")
  },
  completed1(){
    const clicked = document.getElementById("clicked1")
      clicked.classList.remove("clicked")
  }
}
  }

</script>

<style lang="scss" scoped>

  .earnings {
         display:block;
        position: inherit;
        width: 60%;
      }
  .data {
        display:block;
        position: inherit;
        width: 60%;
      }
      .modaltitle {
      background:transparent;
      border-radius: 8px 8px 0px 0px;
      display:block;
      width:100%;
      padding:20px;
      transition:.2s ease-in-out all;
      }

      .modaltitle:hover{
        transition:.2s ease-in-out all;
          background-color: #2b00ec44;
      }
      .clicked{
        transition:.2s ease-in-out all;
          background-color: #2b00ec44;
      }
  .main-con {
    background: white;
    height: 1000px;
    border-radius: 8px;
  }

.dots-bg{
    background: url("/freehand-bg.svg");
    padding:30px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size:110%;
    position:relative;
    width:100%;
    height:90%;
    left:0;
    right:0;

}
.earning-movable{
 width:60%;
}
.earning-movable-con{
  background:blue;
  z-index:90;
}
.user-movable{
 position: inherit !important;
 width:60%;
}
.v-navigation-drawer--mini-variant .v-list-item > *:first-child{
  width:90%;

}
.top-banner{
background:rgb(212, 212, 212);
border-radius:15px;
width:100%;
height:25px;
}
</style>

