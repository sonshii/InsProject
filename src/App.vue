<template>
  <v-app>
  <v-content class="ma-5 pa-1">
    <RightContent/>
  </v-content> 
  </v-app>
</template>
<script>

import RightContent from './components/RightContent';

export default {
  name: 'App',
  components: {
    RightContent,
  },
  data: () => ({
    //
  }),
};
</script>