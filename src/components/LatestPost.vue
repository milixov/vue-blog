<template>
  <v-container fluid pa-0>
    <v-layout column style="padding-top: 64px">
      <h3>Latest Posts</h3>
      <v-flex style="padding-top: 16px">
        <div v-for="n in data" :key="n">
          <v-btn flat round>{{n.title}}</v-btn>
          <v-divider></v-divider>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>