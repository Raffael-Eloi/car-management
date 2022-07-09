<template>
  <header class="p-2 bg-dark bg-gradient">
    <b-row>
      <b-col md="4" class="d-flex align-items-center">
        <router-link :to="{ name: 'home' }">
          <i class="fa-solid fa-house text-light ms-5"></i>
        </router-link>
      </b-col>

      <b-col md="4" class="d-flex align-items-center">
        <b-nav>
          <h5 class="text-light ms-5 me-2">Gerenciamento de veículos</h5>
        </b-nav>
      </b-col>

      <b-col md="4">
        <b-nav class="justify-content-end me-2">
          <b-button variant="outline-dark">
            <b-avatar
              src="https://saxuming.net/wp-content/uploads/2020/11/sin-foto-mujer-hombre-300x300.jpg"
              badge
              badge-variant="success"
              class="me-3"
            ></b-avatar>
            <i class="fa-solid fa-caret-down text-light"></i>
          </b-button>
        </b-nav>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: "header-component",

  components: {},

  data() {
    return {
      user: "Raffael Eloi",
    };
  },
};
</script>

<style scoped>
</style>