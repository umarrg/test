<template>
  <v-app class="custom_bg">
    <NavBar />
    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
    <v-footer color="#224365">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/Navbar.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped></style>
