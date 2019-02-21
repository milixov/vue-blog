<template>
  <v-container fluid grid-list-sm style="padding-top: 34px">
    <v-layout wrap column>
      <h1>This is an about page</h1>
      <h5 shrink style="color: #BDBDBD">Sheets can accept a custom elevation</h5>
      <v-img
        style="margin-top: 32px"
        height="400"
        :src="`https://unsplash.it/72/72?image=${Math.floor(Math.random() * 100) + 1}`"
        aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-layout>
    <v-layout wrap column style="margin-top: 32px">
      <p>component is a malleable piece of paper that can be morphed to facilitate other components. In this example we utilize custom color, theme (dark/light) and size.</p>
    </v-layout>
    <v-layout row>
      <v-flex shrink wrap style="border-radius: 6px">
        <SocialShare :url="milad"/>
      </v-flex>
      <v-flex grow>
        <v-layout row align-center wrap>
          <h4>Tags</h4>
          <v-btn outline small color="grey">Button</v-btn>
          <v-btn outline small color="grey">Outline</v-btn>
          <v-btn outline small color="grey">Gray</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout align-center row style="margin-top: 64px">
      <v-flex shrink>
        <v-img
          height="180"
          width="180"
          :src="`https://unsplash.it/180/180?image=${Math.floor(Math.random() * 100) + 1}`"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-flex>
      <v-flex grow>
        <v-layout column fill-height>
          <h2>hi</h2>
          <h4 style="color: #BDBDBD">mili</h4>

          <h5 style="margin-top: 16px">
            component is a malleable piece of paper that can be morphed to facilitate other components.
            In this example we utilize custom color, theme (dark/light) and size
          </h5>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SocialShare from "../components/SocialShare";

export default {
  components: {
    SocialShare
  }
};
</script>
