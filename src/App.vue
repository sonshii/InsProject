<template>
  <v-app>
  <v-content class="ma-5 pa-1">
    <BaseLayout/>
  </v-content> 
  </v-app>
</template>
<script>

import BaseLayout from './components/BaseLayout';

export default {
  name: 'App',
  components: {
    BaseLayout,
  },
  data: () => ({
    //
  }),
};
</script>