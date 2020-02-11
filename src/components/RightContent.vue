<template>
  <base-layout>
    <v-content class="ma-5 pa-1">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <div class="title mb-5">Клиенты этой группы</div>
            <v-data-table
              :headers="headers"
              :items="checkEnable(true)"
              hide-default-footer
              class="mb-5"
            >
              <template v-slot:item.action="{ item }">
                <v-icon small @click="deleteClient(item)">mdi-close</v-icon>
              </template>
            </v-data-table>
          </v-col>
          <v-col>
            <v-row>
              <v-col
                cols="12"
                xs="12"
                md="8"
                class="d-flex flex-column flex-lg-row flex-md-row flex-sm-row flex-xs-column justify-space-between align-center mb-5"
              >
                <v-select
                  :items="checkEnable(false)"
                  item-text="name"
                  v-model="checkedSelect"
                  outlined
                  class="mt-8 mr-4"
                ></v-select>
                <v-btn
                  v-on:click="addClient()"
                  class="mr-4"
                  height="56px"
                  outlined
                  color="primary"
                >Добавить</v-btn>
                <span class="mr-4">или</span>
                <a class="link" text small>Создать нового клиента</a>
              </v-col>
            </v-row>

            <v-row>
              <v-col xs="12" md="8" class="d-flex flex-column">
                <p class="mb-12">
                  Для того, чтобы отредактировать или удалить клиентов из списка, перейдите в раздел
                  <a
                    class="link"
                  >Белые списки</a>
                </p>
                <v-btn
                  class="white--text col-xs-12 col-sm-6 col-md-6 col-lg-8"
                  height="56px"
                  color="primary"
                >Сохранить изменения</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </base-layout>
</template>


<script>
import BaseLayout from "./BaseLayout";

export default {
  name: "App",
  components: {
    BaseLayout
  },
  data: () => ({
    checkedSelect: "1",
    headers: [
      {
        text: "ФИО",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Номер телефона", value: "number" },
      { text: "Группа", value: "group" },
      { text: "", value: "action", sortable: false }
    ],
    clients: [
      {
        name: "1",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: false
      },
      {
        name: "2",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: false
      },
      {
        name: "3",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: false
      },
      {
        name: "4",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: false
      },
      {
        name: "5",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: false
      },
      {
        name: "6",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: true
      },
      {
        name: "7",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: true
      },
      {
        name: "8",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: true
      },
      {
        name: "9",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: true
      },
      {
        name: "10",
        number: "+7 (912) 632-32-32",
        group: "ГАЗПРОМ",
        enable: true
      }
    ]
  }),
  methods: {
    // Удаляет клиентов из таблицы
    // Ищет индекс выбранного элемента , в массиве с этим индексом меняет enable на false

    deleteClient(item) {
      const index = this.clients.indexOf(item);
      if (confirm("Вы уверены что хотите удалить элемент?")) {
        this.clients[index].enable = false;
      }
    },

    // Изменяет значение enable (если true - то заносит clients в  таблицу, если false - то в select)

    checkEnable(bool) {
      return this.clients.filter(item => item.enable === bool);
    },

    // Добавляет клиентов в таблицу
    // Проходит по массиву clients , если name = выбранному элементу в select, то enable меняет на true и заносит в таблицу

    addClient() {
      this.clients = this.clients.map(item => {
        if (item.name === this.checkedSelect) {
          item.enable = true;
        }
        return item;
      });
    }
  }
};
</script>


