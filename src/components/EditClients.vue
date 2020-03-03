<template>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        
        <v-btn class=""  v-on="on">Добавить нового клиента</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Добавить нового клиента</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Имя" v-model="name"></v-text-field>
             <v-select :items="items" label="Группа"></v-select>
            <v-text-field label="Почта" v-model="email"></v-text-field>
            <v-text-field label="Телефон" v-model="phone"></v-text-field>
            <v-text-field label="Адрес" v-model="address"></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  }
};
</script>