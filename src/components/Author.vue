<template>
  <v-layout row align-center>
    <v-flex shrink>
      <v-img
        style="margin-top: 32px; border-radius: 4px"
        height="180"
        width="180"
        :src="image"
        aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-flex>
    <v-flex grow style="margin-left: 8px">
      <h2>{{title}}</h2>
      <h4 style="color: #BDBDBD">{{subtitle}}</h4>
      <p style="padding-top: 16px">{{desc}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    subtitle: String,
    desc: String
  }
};
</script>