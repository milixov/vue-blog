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
    <v-layout row style="margin-bottom: 32px; margin-top: 32px">
      <v-flex grow wrap>
        <SocialShare :url="url"/>
      </v-flex>
      <v-flex shrink>
        <Tag :data="tags"/>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <Author/>
    </v-layout>
  </v-container>
</template>

<script>
import SocialShare from "../components/SocialShare";
import Tag from "../components/Tag";
import Author from "../components/Author";

export default {
  data: () => ({
    url: "Hi",
    tags: [{ id: "1a", title: "Mattis" }, { id: "3a", title: "Aliquet" }]
  }),
  components: {
    SocialShare,
    Tag,
    Author
  }
};
</script>
