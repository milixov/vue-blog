<template>
  <v-container fluid id="m-foot" pa-0>
    <v-layout
      align-center
      justify-center
      column
      fill-height
      style="padding-top: 128px; padding-bottom: 128px"
    >
      <v-flex>
        <h1 class="white--text">Subscribe Our Newsletter</h1>
      </v-flex>
      <v-flex style="margin-top: 16px">
        <h5
          class="white--text"
        >Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus</h5>
      </v-flex>
      <v-flex>
        <h5 class="white--text">Molestie ac feugiat sed lectus vestibulum</h5>
      </v-flex>
      <v-flex style="margin-top: 64px">
        <v-layout
          row
          align-center
          style="background-color: white; border-radius: 40px; padding-left: 32px;padding-right: 16px"
        >
          <v-text-field light placeholder="Enter Email Address" color="black"></v-text-field>
          <v-btn round color="#3B2EB2" dark large>Subscribe
            <v-icon dark>mdi-chevron-right</v-icon>
          </v-btn>
        </v-layout>
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