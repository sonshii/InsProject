<template>
  <div>
    <v-row>
      <v-col>
        <v-list flat>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route">
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: 0,
    items: [
      { text: "Клиенты", route: "/ClientsView" },
      { text: "Группы", route: "/GroupsView" }
    ]
  })
};
</script>