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
                  v-model="global"
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

                  <div
                    class="d-flex justify-center align-center py-6"
                    v-if="getting"
                  >
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>

                  <tbody v-for="item in search" :key="item.id">
                    <tr
                      @click="toggle(item.id)"
                      :class="{ opened: opened.includes(item.id) }"
                    >
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
                    <tr v-if="opened.includes(item.id)">
                      <td colspan="2">
                        <v-radio-group v-model="radioGroup">
                          <v-radio
                            v-for="gd in item.goods"
                            :key="gd.ean"
                            :label="gd.name"
                            :value="gd"
                          ></v-radio>
                        </v-radio-group>
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
import * as fb from "../Services/db";
export default {
  name: "Home",

  components: {
    CreateGoods,
    CreateGroup,
  },

  data: () => ({
    opened: [],
    radioGroup: 0,
    global: "",
    groups: [],
    getting: false,
  }),

  methods: {
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    },

    readGroup() {
      this.getting = true;

      fb.groupCollection
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            fb.groupCollection
              .doc(doc.id)
              .collection("goods")
              .get()
              .then((querySnapshot) => {
                const document = querySnapshot.docs.map((doc) => doc.data());
                let data = {
                  name: doc.data().name,
                  id: doc.id,
                  goods: document,
                };
                this.getting = false;
                this.groups.push(data);
              });
          });
        })
        .catch((error) => {
          this.getting = false;
          console.log("Error getting documents: ", error);
        });
    },
  },

  mounted() {
    this.readGroup();
  },
  computed: {
    search() {
      return this.groups.filter((val) => {
        return this.global
          .toLowerCase()
          .split(" ")
          .every((v) => val.name.toLowerCase().includes(v));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
.opened {
  background-color: rgba(211, 228, 244, 0.5);
}

tbody {
  tr:hover {
    background-color: transparent !important;
  }
}
</style>
