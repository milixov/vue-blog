<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex v-for="n in data" :key="n.slug" xs6>
        <v-card style="margin: 16px" raised hover ripple :to="`post?slug=${n.slug}`">
          <v-img
            height="280"
            :src="`https://unsplash.it/72/72?image=${Math.floor(Math.random() * 100) + 1}`"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{n.title}}</div>
              <span class="grey--text">{{"By: " + n.author.username + ", Date: " + n.createdAt}}</span>
              <div style="margin-top: 16px">{{n.description}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center justify-center>
      <v-pagination
        @input="onPageChange"
        v-model="page"
        :length="total"
        :total-visible="5"
        circle
        flat
      ></v-pagination>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data: () => ({
    page: 1,
    total: null,
    count: 6,
    data: [],
    erros: []
  }),
  methods: {
    onPageChange(page) {
      axios
        .get(
          `${this.$store.getters.url}/articles?limit=6&offset=${this.count *
            (this.page - 1)}`,
          {
            headers: { Authorization: this.$store.state.token }
          }
        )
        .then(response => {
          this.data = response.data.articles;
          let div = response.data.articlesCount / 6;
          let rem = response.data.articlesCount % 6;
          this.total = div;
          if (rem > 0) {
            this.total++;
          }

          this.data.map(
            item =>
              (item.createdAt = moment(
                item.createdAt,
                "YYYY-MM-DDTHH:mm:ss.SSSZ"
              ).format("D MMMM YYYY"))
          );
        })
        .catch(e => {
          this.erros.push(e);
        });
    }
  },
  created() {
    this.onPageChange(this.page);
  }
};
</script>
