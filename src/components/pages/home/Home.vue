<template>
  <main>
    <header-component />
    <b-row>
      <b-col mb="3">
        <sidebar-component />
      </b-col>
      <b-col md="9" class="mt-5">
        <h4 class="text-center">Seja bem vindo, {{ user }} !</h4>
        <h5 class="text-center">
          Selecione o que deseja fazer no menu lateral.
        </h5>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import Header from "../../shared/header/Header.vue";
import Sidebar from "../../shared/sidebar/Sidebar.vue";

export default {
  name: "page-home",

  components: { "header-component": Header, "sidebar-component": Sidebar },

  data() {
    return {
      user: "Raffael Eloi",
    };
  },
};
</script>

<style scoped>
a:hover {
  background-color: gray;
}
</style>