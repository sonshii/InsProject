<template>
  <v-content>
    <v-container d-flex flex-row>
      <ListPanel />
      <RightContent />
    </v-container>
  </v-content>
</template>
<script>
import ListPanel from "./ListPanel";
import RightContent from "./RightContent";

export default {
  name: "App",
  components: {
    ListPanel,
    RightContent
  },
  data: () => ({
    //
  })
};
</script>