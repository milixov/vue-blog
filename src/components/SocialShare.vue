<template>
  <v-layout row>
    <div>
      <ShareFacebook :url="url" size="l" type="rounded"/>
    </div>
    <div id="m-marg">
      <ShareTwitter :url="url" size="l" type="rounded"/>
    </div>
    <div id="m-marg">
      <ShareGooglePlus :url="url" size="l" type="rounded"/>
    </div>
    <div id="m-marg">
      <ShareLine :url="url" size="l" type="rounded"/>
    </div>
  </v-layout>
</template>

<script>
import { ShareFacebook, ShareTwitter, ShareGooglePlus } from "vue-share-social";

export default {
  props: {
    url: String
  },
  components: {
    ShareTwitter,
    ShareFacebook,
    ShareGooglePlus
  }
};
</script>

<style>
#m-marg {
  margin-left: 8px;
}
</style>