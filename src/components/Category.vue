<template>
  <v-container fluid pa-0>
    <v-layout column style="padding-top: 64px">
      <h3>Categories</h3>
      <v-flex xs8 style="padding-top: 16px">
        <div v-for="n in data" :key="n">
          <v-btn flat round>{{n}}</v-btn>
          <v-divider></v-divider>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    data: [],
    erros: []
  }),
  created() {
    axios
      .get(`${this.$store.getters.url}/tags`, {
        headers: { Authorization: this.$store.state.token }
      })
      .then(response => {
        this.data = response.data.tags;
      })
      .catch(e => {
        this.erros.push(e);
      });
  }
};
</script>