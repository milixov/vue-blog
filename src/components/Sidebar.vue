<template>
  <v-container fluid pa-0>
    <v-layout column>
      <v-flex id="m-search">
        <v-text-field
          single-line
          full-width
          hide-details
          placeholder="Search..."
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-flex>
      <Category :data="categoryList"/>
      <LatestPost :data="postList"/>
    </v-layout>
  </v-container>
</template>

<script>
import Category from "./Category";
import LatestPost from "./LatestPost";

export default {
  props: { categoryList: Array, postList: Array },
  components: {
    Category,
    LatestPost
  }
};
</script>

<style>
#m-search {
  border-radius: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: #bdbdbd;
  padding-left: 8px;
  padding-right: 8px;
}
</style>