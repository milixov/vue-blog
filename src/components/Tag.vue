<template>
  <v-layout row align-center>
    <h4>Tags</h4>
    <v-layout id="m-marg-l" row align-center>
      <div v-for="n in data" :key="n">
        <v-btn outline small color="grey">{{n}}</v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
import SocialShare from "../components/SocialShare";
import Tag from "../components/Tag";

export default {
  props: {
    data: Array
  }
};
</script>

<style>
#m-marg-l {
  margin-left: 24px;
}
</style>