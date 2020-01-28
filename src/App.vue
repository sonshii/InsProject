<template>
  <v-app>
  <v-content class="ma-5 pa-1">
    <div class="app-wrapper">
    <h3 class="mb-5">Клиенты этой группы</h3>
    <v-data-table 
      :headers="headers"
      :items="peoples"
      hide-default-footer="false"
      class="mb-5" >
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-close
        </v-icon>
      </template>
    </v-data-table>

    <div class="d-flex justify-space-between align-center w-100 mb-5">
        <v-select
          :items="items"
          label="Выбрать из списка"
          outlined
          class="mb--30 mr-4"
        ></v-select>
        <v-btn class="button__custom-height mr-4" outlined color="grey" >Добавить</v-btn>
        <span class="mr-4"> или </span>
        <a class="link" text small>Создать нового клиента</a>
    </div>

    <p class="mb-12">Для того, чтобы отредактировать или удалить клиентов из списка, перейдите в раздел <a class="link">Белые списки</a></p>
    <v-btn class="button__custom-height ma-0 px-12 white--text"  color="grey">Сохранить изменения</v-btn>
  </div>
  </v-content> 
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () =>({
        headers: [
          {
            text: 'ФИО',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Номер телефона', value: 'number' },
          { text: 'Группа', value: 'group' },
          { text: '', value: 'action', sortable: false }
        ],
        peoples: [
          {
            name: 'Константинов Константин Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ"
          },
          {
            name: 'Иванов Александр Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ"
          }
        ],
        items:[""]
      
    }),
    methods:{
      deleteItem (item) {
        const index = this.peoples.indexOf(item)
        confirm('Вы уверены что хотите удалить элемент?') && this.peoples.splice(index, 1)
      }
    }
};
</script>


<style>
    /*  default style is sooo hard 
        that why i use !important
        */
  .app-wrapper {
    max-width: 800px;
  }
  .w-100 {
    width: 100%;
  }
  .mb--30 {
    margin-bottom: -30px !important;
  }
  .button__custom-height {
    height: 56px !important;
    text-transform: none !important;
  }
  .link {
    border-bottom: 1px dashed #000;
    transition: all 0.3s ease-in;
    color: #000000 !important;
  }
  .link:hover {
    color: #4A148C !important;
  }
</style>