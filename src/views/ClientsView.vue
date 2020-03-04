<template>
  <v-content class="ma-5 pa-1">
    <v-container d-flex flex-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12">
          <div class="title mb-5">Клиенты этой группы</div>
          <v-data-table :headers="headers" :items="checkEnable(true)" class="mb-5 col-lg-12 col-md-12 col-sm-12">
            <template v-slot:item.edit="{ item }">>
              <EditClients>
                
              </EditClients>
            </template>
            <template v-slot:item.close="{ item }">
              <v-icon small @click="deleteClient(item.id)">mdi-delete-outline</v-icon>
            </template>
          </v-data-table>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="12" xs="12" md="8" class="d-flex flex-column flex-lg-row flex-md-row flex-sm-row flex-xs-column justify-space-between align-center mb-5">
              <v-select :items="checkEnable(false)" item-text="name" v-model="checkedSelect" outlined class="mt-8 mr-4"></v-select>
              <v-btn v-on:click="addClient()" class="mr-4" height="56px" outlined color="primary">Добавить</v-btn>
              <span class="mr-4">или</span>
              <AddClients />
            </v-col>
          </v-row>

          <v-row>
            <v-col xs="12" md="8" class="d-flex flex-column">
              <p class="mb-12">Для того, чтобы отредактировать или удалить клиентов из списка, перейдите в раздел
                <a class="link">Белые списки</a>
              </p>
              <v-btn class="white--text col-xs-12 col-sm-6 col-md-6 col-lg-8" height="56px" color="primary">Сохранить изменения</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>



<script>
import AddClients from "../components/AddClients";
import EditClients from "../components/EditClients";

export default {
  components: {
    AddClients,
    EditClients
  },
  props: ['item'],
  data: () => ({
    headers: [
      { text: "ФИО", align: "left", value: "name", sortable: false },
      { text: "Группа", value: "group" },
      { text: "Номер телефона", value: "phone" },
      { text: "Почта", value: "email" },
      { text: "Адрес", value: "address" },
      { text: "", value: "edit", sortable: false },
      { text: "", value: "close", sortable: false }
    ],
    clients: [],
    checkedSelect: ''
  }),
  computed: {
    allClients() {
      return this.$store.getters.allClients;
    }
  },
  mounted() {
    this.initClients();
  },
  methods: {
    initClients() {
      this.$store.dispatch("fetchClients");
    },
    // initDeleteClients() {
    //   this.$store.dispatch("deleteClients");
    // },
    
    // Удаляет клиентов из таблицы
    // Ищет индекс выбранного элемента , в массиве с этим индексом меняет enable на false

    deleteClient(item) {
      console.log(item);

      // const index = this.allClients.indexOf(item);
      // if (confirm("Вы уверены что хотите удалить элемент?")) {
      //   this.allClients[index].isActive = false;
      // }
    },
    // editClient(item){

    // }

    // Изменяет значение enable (если true - то заносит clients в  таблицу, если false - то в select)

    checkEnable(bool) {
      return this.allClients.filter(item => item.isActive === bool);
    },

    // Добавляет клиентов в таблицу
    // Проходит по массиву clients , если name = выбранному элементу в select, то enable меняет на true и заносит в таблицу

    addClient() {
      this.allClients = this.allClients.map(item => {
        if (item.name === this.checkedSelect) {
          item.isActive = true;
        }
        return item;
      });
    }
  }
};
</script>