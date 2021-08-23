<template>
  <v-app>
    <v-app-bar color="transparent" app class="elevation-0">
      <v-container>
        <v-layout row wrap >
          <v-flex>
            <img src="/logo.svg" alt="panoptic">

          </v-flex>
          <v-flex row class="align-center justify-end">
            <ul style="list-style:none;">
              <li class="pr-5" style="display:inline" v-for="link in links" :key="link" @click="() => {}">
                {{ link.name }}
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
      </v-container>
    </v-main>



  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        links: [{
            name: 'contact',
            link: '#contact'
          },
          {
            name: 'contact',
            link: '#contact'
          },
          {
            name: 'contact',
            link: '#contact'
          },
        ]
      }
    },

  }

</script>

<style lang="scss" scoped>

</style>
