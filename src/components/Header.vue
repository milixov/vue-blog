<template>
  <v-container fluid id="m-head">
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-layout row align-center>
          <v-flex grow>
            <!-- <h2 class="white--text">Vue Blog</h2> -->
            <v-icon x-large dark>mdi-blogger</v-icon>
          </v-flex>
          <v-flex shrink>
            <v-btn flat round color="white">Home</v-btn>
            <v-btn flat round color="white">About</v-btn>
            <v-btn flat round color="white">Screen</v-btn>
            <v-btn flat round color="white">Contact</v-btn>
            <v-btn outline round color="white">Create Account</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      <h1 class="white--text">{{title}}</h1>
      <h5 class="white--text">{{subtitle}}</h5>
    </v-layout>
  </v-container>
</template>

<script>
export default { props: { title: String, subtitle: String } };
</script>

<style>
#m-head {
  height: 470px;
  background-image: linear-gradient(-45deg, #392cb0, #ca73d8);
}
</style>