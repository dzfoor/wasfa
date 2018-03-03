<template>
<v-app>
    <v-navigation-drawer
      app
      clipped
      fixed
      stateless
      hide-overlay
      right
      v-model="drawer"
      absolute
    >
    <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>
    <v-toolbar 
      dark
      app
      clipped-right
      fixed
      color="cyan">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <nuxt-link class="title" to="/">وصفة</nuxt-link>
    </v-toolbar-title>
        <v-text-field
        prefix="ابحث عن وصفة"
        class="text-xl-right"
        light
        right
        solo
        label=""
        append-icon="keyboard_voice"
        prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <h1>Test</h1>
    </v-container>
  </v-content>
  <v-footer class="pa-3"
  app
  dark
  >
  <div class="white--text"><nuxt-link to="/">WasfaApp</nuxt-link> © {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>
<script>
  export default {
    data() {
      return{
        drawer: null
      }
    }
  }
</script>
<style scoped>
.title {
  text-decoration: none !important;
}
.title:visited{
  color: white;
}
.input-group__input input[type=text]:focus{
    color: #212121 !important;
}

</style>