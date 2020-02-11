<template>
  <v-content class="ma-5 pa-1">
    <v-container d-flex flex-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12">
          <div class="title mb-5">Группы</div>
          <v-data-table
            :headers="headers"
            :items="groups"
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
    ],
    groups: [
      { name: "Группа-1" },
      { name: "Группа-2" },
      { name: "Группа-3" },
      { name: "Группа-4" },
      { name: "Группа-5" },
      { name: "Группа-6" },
      { name: "Группа-7" },
      { name: "Группа-8" },
      { name: "Группа-9" },
      { name: "Группа-10" }
    ]
  })
};
</script>
