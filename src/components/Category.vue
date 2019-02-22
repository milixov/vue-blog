<template>
  <v-container fluid pa-0>
    <v-layout column style="padding-top: 64px">
      <h3>Categories</h3>
      <v-flex xs8 style="padding-top: 16px">
        <div v-for="n in data" :key="n">
          <v-btn flat :color="n.color" round to="/" @click="item => setTag(n.title)">{{n.title}}</v-btn>
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
  methods: {
    setTag(value) {
      this.$store.commit("setTag", value);
    }
  },
  created() {
    var stateTag = this.$store.state.tag;
    axios
      .get(`${this.$store.getters.url}/tags`, {
        headers: { Authorization: this.$store.state.token }
      })
      .then(response => {
        var data = response.data.tags;
        this.data = [];
        data.map(item => {
          this.data.push({
            title: item,
            color: stateTag === item ? "primary" : "gray"
          });
        });
      })
      .catch(e => {
        this.erros.push(e);
      });
  }
};
</script>