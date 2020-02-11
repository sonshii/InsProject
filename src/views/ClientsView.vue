<template>
  <v-content class="ma-5 pa-1">
    <v-container d-flex flex-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12">
          <div class="title mb-5">Клиенты этой группы</div>
          <v-data-table
            :headers="headers"
            :items="clients"
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
      { text: "ФИО", align: "left", value: "name", sortable: false },
      { text: "Номер телефона", value: "number" },
      { text: "Группа", value: "group" }
    ],
    clients: [
      {
        name: "1",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "2",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "3",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "4",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "5",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "6",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "7",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "8",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "9",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      },
      {
        name: "10",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ"
      }
    ]
  })
};
</script>