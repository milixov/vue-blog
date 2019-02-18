<template>
  <v-container fluid id="m-foot" pa-0>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <p>Footer</p>
      </v-flex>
    </v-layout>
    <v-layout row id="m-lane">
      <v-flex xs10 offset-xs1>
        <v-layout row align-center>
          <v-flex grow>
            <h5 id="m-text">
              Designed by
              <strong class="white--text">GoldeLayers</strong> | Powered by WordPress
            </h5>
          </v-flex>
          <v-flex shrink>
            <v-btn flat small round color="#EEEEEE">
              <h5>Home</h5>
            </v-btn>
            <v-btn flat small round color="#EEEEEE">
              <h5>About Us</h5>
            </v-btn>
            <v-btn flat small round color="#EEEEEE">
              <h5>Pages</h5>
            </v-btn>
            <v-btn flat small round color="#EEEEEE">
              <h5>Gallery</h5>
            </v-btn>
            <v-btn flat small round color="#EEEEEE">
              <h5>Blog</h5>
            </v-btn>
            <v-btn flat small round color="#EEEEEE">
              <h5>Contact</h5>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
#m-foot {
  background-image: linear-gradient(-45deg, #392cb0, #ca73d8);
}
#m-lane {
  background-color: #21212120;
}
#m-text {
  color: #eeeeee;
}
</style>