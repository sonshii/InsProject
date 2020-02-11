<template>
  <v-app>
  <v-content class="ma-5 pa-1">
    <ClientsView/>
  </v-content> 
  </v-app>
</template>
<script>

import ClientsView from './views/ClientsView';

export default {
  name: 'App',
  components: {
    ClientsView,
  },
  data: () => ({
    //
  }),
};
</script>