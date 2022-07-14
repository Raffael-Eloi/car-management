<template>
  <main>
    <header-component />
    <b-row>
      <b-col mb="3">
        <sidebar-component />
      </b-col>
      <b-col md="9" class="mt-5">
        <h4 class="text-center">Seja bem vindo, {{ user.name }} !</h4>
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
import router from '../../../routes.js';
import api from "../../../api";

export default {
  name: "page-home",

  components: { "header-component": Header, "sidebar-component": Sidebar },

  beforeMount() {
    this.authUser();
  },

  data() {
    return {
      user: {},
      currentUserId: '',
      token: ''
    };
  },

  methods: {
    authUser () {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId && !token) router.push({name: 'login'});
      else {
        this.currentUserId = userId;
        this.token = token;
        this.getCurrentUser();
      }
    },

    getCurrentUser() {
      api.get(`users/${this.currentUserId}`,{
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
      .then(response => this.afterSuccessfulAuth(response.data))
      .catch(errors => this.afterAuthError(errors));
    },

    afterSuccessfulAuth(user) {
      this.user = user;
    },
    
    afterAuthError (errors) {
      if (errors.response.statusText === "Unauthorized") router.push({name: 'login'});
    }
  }
};
</script>

<style scoped>
a:hover {
  background-color: gray;
}
</style>