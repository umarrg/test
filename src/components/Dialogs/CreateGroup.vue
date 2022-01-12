<template>
  <v-dialog v-model="dialog" persistent max-width="700px" overlay-color="secondary">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="secondary"
        class="custom__btn mr-3"
        v-bind="attrs"
        v-on="on"
        active-class="border"
      >
        Create Group
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
        <span class="text-h6 font-weight-bold primary--text mb-4" >Create a groupe</span>
      </div>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text">Group Name</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <span class="primary--text"> Parrents groupe</span>
              <v-text-field
                outlined
                background-color="#EEF4FA"
                height="45px"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          width="254px"
          height="50px"
          @click="dialog = false"
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
export default {
  data: () => ({
    dialog: false,
  }),
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
    color: black;
    background-color: white;
}
</style>
