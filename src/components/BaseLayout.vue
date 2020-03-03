<template>
  <v-container d-flex flex-row>
    <v-navigation-drawer>
      <v-col cols="12">
        <list-panel></list-panel>
      </v-col>
    </v-navigation-drawer>
    <v-row>
      <v-col cols="12">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ListPanel from "./ListPanel";

export default {
  name: "App",
  components: {
    ListPanel
  },
  data: () => ({
    //
  })
};
</script>