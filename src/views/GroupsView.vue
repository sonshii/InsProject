<template>
  <v-content class="ma-5 pa-1">
    <v-container d-flex flex-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12">
          <div class="title mb-5">Группы</div>
          <v-data-table
            :headers="headers"
            :items="allGroups()"
            hide-default-footer
            class="mb-5 col-lg-12 col-md-12 col-sm-12"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "Группа", align: "left", value: "name", sortable: false }
    ]
  }),
  mounted(){
    this.allGroups();
    this.$store.dispatch('fetchGroups');
  },
  methods:{
    allGroups(){
      return this.$store.getters.allGroups;
    }
  }
};
</script>
