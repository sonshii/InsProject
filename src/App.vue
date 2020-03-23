<template>
  <v-app>
    <v-container d-flex flex-row>
      <div d-flex flex-column>
        <ListPanel />
      </div>
      <v-content class="ma-5 pa-1">
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>
<script>

import ListPanel from "./components/ListPanel";


export default {
  name: "App",
  components: {
    ListPanel,
  },
  data: () => ({
    //
  })
};
</script>