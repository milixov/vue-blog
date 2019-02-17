<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>-->
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
    <v-container id="m-pad" fluid grid-list>
      <Header title="Our Blog" subtitle="Home - Blog"/>
      <router-view/>
      <Footer/>
    </v-container>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
#m-pad {
  padding: 0;
}
</style>
