<template>
  <v-layout row align-center>
    <v-flex>
      <v-img
        style="margin-top: 32px"
        height="180"
        width="180"
        :src="`https://unsplash.it/180/180?image=${Math.floor(Math.random() * 100) + 1}`"
        aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-flex>
    <v-flex style="margin-left: 8px">
      <h2>Author</h2>
      <h4 style="color: #BDBDBD">CEO</h4>
      <p
        style="padding-top: 16px"
      >is designed to power other paper components within Vuetify. It is meant to be used as a low level component.</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>