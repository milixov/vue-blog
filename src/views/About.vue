<template>
  <v-container fluid grid-list-sm style="padding-top: 34px">
    <v-layout wrap column>
      <h1>{{data.title}}</h1>
      <h5
        shrink
        style="color: #BDBDBD"
      >{{"By: " + data.author.username + ", Date: " + data.createdAt}}</h5>
      <v-img
        style="margin-top: 32px"
        height="400"
        :src="`https://unsplash.it/72/72?image=${Math.floor(Math.random() * 100) + 1}`"
        aspect-ratio="1"
        class="grey lighten-2"
      />
    </v-layout>
    <v-layout wrap column style="margin-top: 32px">
      <p>{{data.body}}</p>
    </v-layout>
    <v-layout row style="margin-bottom: 32px; margin-top: 32px">
      <v-flex grow wrap>
        <SocialShare :url="url"/>
      </v-flex>
      <v-flex shrink>
        <Tag :data="data.tagList"/>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <Author
        :image="data.author.image"
        :title="data.author.username"
        subtitle="CEO"
        desc="Lorem Text"
      />
    </v-layout>
    <v-layout wrap style="margin-top: 64px">
      <Comment/>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

import SocialShare from "../components/SocialShare";
import Tag from "../components/Tag";
import Author from "../components/Author";
import Comment from "../components/Comment";

export default {
  data: () => ({
    url: null,
    data: null
  }),
  components: {
    SocialShare,
    Tag,
    Author,
    Comment
  },
  created() {
    this.url = this.$store.getters.source + this.$route.fullPath;

    axios
      .get(`${this.$store.getters.url}/articles/${this.$route.query.slug}`, {
        headers: { Authorization: this.$store.state.token }
      })
      .then(response => {
        this.data = response.data.article;
      })
      .catch(e => {
        this.erros.push(e);
      });
  }
};
</script>
