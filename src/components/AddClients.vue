<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn class v-on="on">Добавить нового клиента</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Добавить нового клиента</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Имя" v-model="name" :rules="nameRules" required></v-text-field>
          <v-select :items="allClients" item-text="group" label="Группа" v-model="group"></v-select>
          <v-text-field label="Почта" v-model="email" :rules="emailRules" required></v-text-field>
          <v-text-field label="Телефон" v-model="phone" :rules="phoneRules"></v-text-field>
          <v-text-field label="Адрес" v-model="address"></v-text-field>
          <v-btn  class="mx-3 mt-3" @click="addClient()">Добавить клиента</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
//import { mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      name: "",
      isActive: true,
      group: '',
      nameRules: [v => !!v || "Name is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phone: "",
      phoneRules: [],
      address: ""
    };
  },
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
    initAddClients() {
      this.$store.dispatch("addClients");
    },
    addClient() {
      if (this.$refs.form.validate()) {
        this.initAddClients(
          this.name,
          this.isActive,
          this.group,
          this.email,
          this.phone,
          this.address
        );
        console.log(this.name,this.isActive,
        this.group,
        this.email,
        this.phone,
        this.address);
      }
    }
  }
};
</script>