<template>
  <v-container fluid pa-0>
    <v-layout column style="padding-top: 64px">
      <h3>Latest Posts</h3>
      <v-flex style="padding-top: 16px">
        <div v-for="n in data" :key="n.id" style="margin-bottom: 16px">
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
                <h5 shrink style="color: #BDBDBD">{{n.date}}</h5>
              </v-layout>
            </v-flex>
          </v-layout>
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