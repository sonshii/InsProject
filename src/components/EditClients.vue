<template>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-icon  small v-on="on">mdi-account-edit-outline</v-icon>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Редактировать клиента</v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
          <v-text-field label="Имя" v-model="name" :rules="nameRules" required></v-text-field>
          <v-select :items="allClients" item-text="group" label="Группа" v-model="group"></v-select>
          <v-text-field label="Почта" v-model="email" :rules="emailRules" required></v-text-field>
          <v-text-field label="Телефон" v-model="phone" :rules="phoneRules"></v-text-field>
          <v-text-field label="Адрес" v-model="address"></v-text-field>
          <v-btn  class="mx-3 mt-3" @click="editClient()">Добавить клиента</v-btn>
        </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

</template>
<script>
export default {
  props: ['item'],
  data() {
    return {
      dialog: false,
      name: '',
      email: '',
      phone: '',
      address: '',
      isActive: true,
      group: '',
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phoneRules: [],
      clientData: []
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
    editClient(){
      if (this.$refs.form.validate()) {
        this.clientsData = this.$store.dispatch("editClients",{
          //id: item.id,
          name: this.name,
          isActive: this.isActive , 
          group: this.group, 
          email: this.email, 
          phone: this.phone, 
          address: this.address
        });
      }
    }
  }
};
</script>