<template>
  <v-layout column>
    <h2>1 Comments</h2>
    <v-layout style="margin-top: 32px; margin-bottom: 64px">
      <Reply/>
    </v-layout>
    <h2>Write Your Comment</h2>
    <v-layout column style="margin-top: 32px">
      <v-layout row>
        <v-text-field label="Name" outline style="margin-right: 12px"></v-text-field>
        <v-text-field label="Email Address" style="margin-left: 12px" outline></v-text-field>
      </v-layout>
      <v-textarea outline name="input-7-4" label="Message" no-resize></v-textarea>
      <v-flex xs4>
        <v-btn style="margin-left: 0" round color="#3B2EB2" dark large>Submit
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import Reply from "./Reply.vue";
export default {
  components: {
    Reply
  }
};
</script>