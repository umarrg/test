<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12" class="pa-0">
          <v-sheet color="#D3E4F4" height="66px" class="px-6 py-3">
            <div class="d-flex justify-center align-center">
              <div class="d-flex">
                <CreateGroup />
                <CreateGoods />
              </div>
              <v-spacer></v-spacer>
              <div style="width: 453px">
                <v-text-field
                  hide-details=""
                  outlined
                  dense
                  class="custom__field"
                  placeholder="Serach"
                  append-icon="mdi-magnify"
                  background-color="white"
                ></v-text-field>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="12" class="pa-0">
          <v-sheet color="#EEF4FA" min-height="100vh">
            <v-col cols="12" md="12">
              <v-simple-table fixed-header class="transparent">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left transparent primary--text">Name</th>
                      <th class="text-left transparent primary--text">Price</th>
                      <th class="text-left transparent primary--text">
                        Balance
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td class="first__row">
                        <v-icon color="primary" left
                          >mdi-folder-open-outline</v-icon
                        >
                        <span class="font-weight-bold primary--text">
                          {{ item.name }}</span
                        >
                      </td>
                      <td style="background: rgba(211, 228, 244, 0.5)">
                        {{ item.calories }}
                      </td>
                      <td style="background: rgba(211, 228, 244, 0.5)">
                        {{ item.calories }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CreateGroup from "../components/Dialogs/CreateGroup.vue";
import CreateGoods from "../components/Dialogs/CreateGoods.vue";
export default {
  name: "Home",

  components: {
    CreateGoods,
    CreateGroup,
  },

  data: () => ({
    desserts: [
      {
        name: "Group1",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
    ],
  }),
};
</script>

<style scoped>
.custom__body {
  border-left: solid 2px #547da9;
}

.custom__field {
  height: 40px;
  width: 453px;
  background: #ffffff;
  border-radius: 8px;
}
.first__row {
  background: rgba(211, 228, 244, 0.33);
  width: 80%;

  border-bottom-style: hidden;
  border-right-style: hidden;
  border-left: solid 3px #547da9;
}

td {
  border: 1px solid rgba(211, 228, 244, 0.33);
  border-collapse: collapse;
}

.noborders > td {
  background: rgba(211, 228, 244, 0.5);
  border-color: transparent;
  border-bottom-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
}
</style>
