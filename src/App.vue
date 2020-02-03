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
                      v-model="checkedSelect"
                      outlined
                      class="mt-8 mr-4">
                    </v-select>
                    <v-btn v-on:click="buttonClick()" class="mr-4" height="56px" outlined color="primary" >Добавить</v-btn>
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
        checkedSelect: '1',
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
            name: '1',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: '2',  
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ", 
            enable: false
          },
          {
            name: '3',            
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: '4',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: '5',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: false
          },
          {
            name: '6',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: '7',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: '8',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: '9',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
          {
            name: '10',
            number: "+7 (912) 632-32-32",
            group: "ГАЗПРОМ",
            enable: true
          },
        ],
        
        
    }),
    methods:{
      deleteItem (item) {
        const index = this.peoples.indexOf(item);
        if(confirm('Вы уверены что хотите удалить элемент?')){
          this.peoples[index].enable = false;      
        }      
      },
      conditionItem(bool){
        return this.peoples.filter(item =>item.enable === bool)
      },
      buttonClick(){
        this.peoples = this.peoples.map(item=>{
          if(item.name === this.checkedSelect){
            item.enable = true;
          }
          return item;
        })
      }
    }
}
</script>


