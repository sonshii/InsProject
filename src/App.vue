<template>
  <v-app>
    <v-content class="ma-5 pa-1">
      <div>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="12">
            <div class="title mb-5 ">Клиенты этой группы</div>
            <v-data-table 
              :headers="headers"
              :items="conditionItem(true)"
              hide-default-footer
              class="mb-5">
              <template v-slot:item.action="{ item }">
                <v-icon
                  small
                  @click="deleteItem(item)">
                  mdi-close
                </v-icon>
              </template>
            </v-data-table>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="12" xs="12" md="8"  class="d-flex flex-column  flex-lg-row flex-md-row flex-sm-row flex-xs-column justify-space-between align-center  mb-5">
                    <v-select
                      :items="conditionItem(false)"
                      item-text="name"
                      label="Выбрать из списка"
                      outlined
                      class="mt-8 mr-4">
                    </v-select>
                    <v-btn class="mr-4" height="56px" outlined color="primary" >Добавить</v-btn>
                    <span class="mr-4"> или </span>
                    <a class="link" text small>Создать нового клиента</a>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col xs="12" md="8" class="d-flex flex-column">
                <p class="mb-12">Для того, чтобы отредактировать или удалить клиентов из списка, перейдите в раздел <a class="link">Белые списки</a></p>
                <v-btn class="  white--text col-xs-12 col-sm-6 col-md-6 col-lg-8"  height="56px"  color="primary">Сохранить изменения</v-btn>
              </v-col>
            </v-row>  
          </v-col>
        </v-row>
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
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: 'Иванов Александр Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ", 
            enable: false
          },
          {
            name: 'Иванов Константин Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: 'Александров Константин Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: 'Константинов Николай Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: 'Николаев Константин Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: 'Константинов Константин Николаевич',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: 'Константинов Валера Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: 'Константинов Константин Валерьевич',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: 'Константинов Алексей Константинович',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          
        ],
        
    }),
    // computed:{
    //   conditionItem:function(){
    //     return this.peoples.filter(function(enable){
    //       return enable == false;
    //     })
    //   }
    // },
    methods:{
      deleteItem (item) {
        const index = this.peoples.indexOf(item);
        confirm('Вы уверены что хотите удалить элемент?') && this.peoples.splice(index, 1);
      },
      conditionItem(bool){
        return this.peoples.filter(item =>item.enable === bool)
      }
    }
}
</script>


