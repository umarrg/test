<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="700px"
    overlay-color="secondary"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        class="custom__btn"
        v-bind="attrs"
        v-on="on"
        active-class="border"
      >
        Create GOODS
      </v-btn>
    </template>
    <v-card class="">
      <div class="d-flex px-3 py-2">
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon color="" large>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="text-center">
        <span class="text-h6 font-weight-bold primary--text mb-4"
          >Create Goods</span
        >
      </div>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Name</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Vendor code</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.vendorcode"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">EAN-13 CODE</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.eancode"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Group of Goods</span>
              <v-select
                :items="groups"
                item-text="name"
                item-value="id"
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.group"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Price purchases</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.pricepurchase"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Sale price</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.saleprice"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Tax </span>
              <v-select
                :items="['12%', '10%', '7%']"
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.tax"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Good type </span>
              <v-select
                :items="['goods']"
                outlined
                background-color="#EEF4FA"
                height="45px"
                v-model="form.type"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          width="254px"
          :loading="loading"
          :disabled="loading"
          height="50px"
          @click="save()"
          class="mb-5"
        >
          Save
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import * as fb from "../../Services/db";

export default {
  data: () => ({
    dialog: false,
    form: {
      name: "",
      tax: "",
      saleprice: "",
      pricepurchase: "",
      type: "",
      group: "",
      eancode: "",
      vendorcode: "",
    },
    groups: [],
    loading: false,
  }),
  methods: {
    save() {
      this.loading = true;
      fb.groupCollection
        .doc(this.form.group)
        .collection("goods")
        .add(this.form)
        .then((res) => {
          (this.loading = false), console.log(res, "message sent successfully");
          this.$router.go();
        })
        .catch((err) => {
          alert(err)((this.loading = false)), console.log(err);
        });
    },
    readGroup() {
      fb.groupCollection
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              name: doc.data().name,
            };
            this.groups.push(data);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
  mounted() {
    this.readGroup();
  },
};
</script>

<style scoped>
.custom__btn {
  height: 50px;
  width: 249px;
  border-radius: 8px;
}
.v-text-field--outlined >>> fieldset {
  border-color: #eef4fa;
}
.border {
  background: white;
}
</style>
