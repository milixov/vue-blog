<template>
  <v-layout row align-start justify-start>
    <v-flex>
      <v-img
        style="border-radius: 4px"
        height="70"
        width="70"
        :src="`https://unsplash.it/70/70?image=${Math.floor(Math.random() * 100) + 1}`"
        aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-flex>
    <v-flex style="margin-left: 8px">
      <h3>Kanina Smith</h3>
      <h5 style="color: #BDBDBD">CEO</h5>
      <p
        style="padding-top: 16px"
      >is designed to power other paper components within Vuetify. It is meant to be used as a low level component.</p>
      <v-btn style="margin-left: 0" round color="#3B2EB2" dark samall>Reply</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>