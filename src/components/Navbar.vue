<template>
  <nav class="mb-0">
    <v-app-bar color="white" flat app clipped-left height="80px">
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-list-item hover>
          <v-list-item-icon>
            <v-icon color="secondary">mdi-account-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="secondary--text">
            Profile
          </v-list-item-title>
        </v-list-item>
        <v-list-item hover>
          <v-list-item-icon>
            <v-icon color="secondary">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="secondary--text">
            Out
          </v-list-item-title>
        </v-list-item>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="primary" app clipped>
      <div class="my-5 mx-1">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {},
  data: () => ({
    drawer: null,
  }),
  methods: {
    logout() {},
  },
  mounted() {},
  computed: {},
};
</script>
<style>
.border {
  color: #1f3a67;
}
</style>
