<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex v-for="i in 6" :key="i" xs6>
        <v-card style="margin: 16px" raised hover ripple to="about">
          <v-img
            height="280"
            :src="`https://unsplash.it/72/72?image=${Math.floor(Math.random() * 100) + 1}`"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
              <div
                style="margin-top: 16px"
              >Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {}
};
</script>
