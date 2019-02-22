<template>
  <v-container fluid pa-0>
    <v-layout column style="padding-top: 64px">
      <h3>Latest Posts</h3>
      <v-flex style="padding-top: 16px">
        <div v-for="n in data" :key="n.slug" style="margin-bottom: 16px">
          <v-card hover flat style="background-color: transparent" :to="`post?slug=${n.slug}`">
            <v-layout row>
              <v-flex shrink>
                <v-img
                  height="72"
                  width="72"
                  :src="`https://unsplash.it/72/72?image=${Math.floor(Math.random() * 100) + 1}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-flex>
              <v-flex xs10 offset-xs1 grow style="margin-left: 8px">
                <v-layout column fill-height>
                  <v-flex grow>
                    <h3>{{n.title}}</h3>
                  </v-flex>
                  <h5 shrink style="color: #BDBDBD">{{"Post " + n.createdAt}}</h5>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  data: () => ({
    data: [],
    erros: []
  }),
  created() {
    axios
      .get(`${this.$store.getters.url}/articles?limit=4`, {
        headers: { Authorization: this.$store.state.token }
      })
      .then(response => {
        this.data = response.data.articles;
        this.data.map(
          item =>
            (item.createdAt = moment(
              item.createdAt,
              "YYYY-MM-DDTHH:mm:ss.SSSZ"
            ).format("D MMMM, YY"))
        );
      })
      .catch(e => {
        this.erros.push(e);
      });
  }
};
</script>