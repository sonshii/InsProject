<template>
  <div class="d-flex flex-row">
    <v-navigation-drawer>
      <v-col cols="12" md="12" sm="12">
        <list-panel></list-panel>
      </v-col>
    </v-navigation-drawer>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <h1 class="title">Группы</h1>
        <v-data-table
          class="col-lg-12 col-md-12 col-sm-12 font-weight-bold"
          :headers="headers"
          :items="groupArray"
          hide-default-footer
        >
          <template v-slot:item.action="{item}">
            <v-icon small @click="deleteItem(item)">mdi-close</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ListPanel from "../components/ListPanel";
export default {
  components:{
    ListPanel
  },
  data: () => ({
      headers: [
      { text: "Название", align: "left", value: "name", sortable: false },
    ],
    groupArray: [
        {name: "Группа-1"},
        {name: "Группа-2"},
        {name: "Группа-3"},
        {name: "Группа-4"},
        {name: "Группа-5"},
        {name: "Группа-6"},
        {name: "Группа-7"},
        {name: "Группа-8"},
        {name: "Группа-9"},
        {name: "Группа-10"},
    ]
  })
};
</script>
