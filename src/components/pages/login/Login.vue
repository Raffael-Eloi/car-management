<template>
  <b-container class="mt-5">
    <b-row class="d-flex align-items-center" style="height: 80vh">
      <b-col></b-col>

      <b-col md="6">
        <b-card bg-variant="light">
          <b-card-title class="text-center mb-4"
            >Faça o login para acessar o sistema</b-card-title
          >
          <b-form @submit.prevent="login()">
            <b-form-group label="E-mail" label-for="input-email">
              <b-form-input
                id="input-email"
                type="email"
                v-model="form.inputs.email"
                placeholder="Digite seu e-mail"
                :state="form.errors.login ? !(form.errors.login !== undefined) : null"
              >
              </b-form-input>
            </b-form-group>

            <b-form-group label="Senha" label-for="input-password">
              <b-form-input
                id="input-password"
                type="password"
                autocomplete="on"
                v-model="form.inputs.password"
                placeholder="Digite sua senha"
                :state="form.errors.login ? !(form.errors.login !== undefined) : null"
              ></b-form-input>

              <ul
                class="text-danger mt-3"
                v-for="(errorMessage, index) in form.errors.login"
                :key="index"
              >
                <li class="fs-6">{{ errorMessage }}</li>
              </ul>
            </b-form-group>

            <div class="d-grid gap-2">
              <b-button
                type="submit"
                variant="success"
                @click.prevent="login()"
                :disabled="form.loading || (!this.form.inputs.email || !this.form.inputs.password)"
                >Entrar <i class="fa-solid fa-arrow-right-to-bracket"></i
              ></b-button>
            </div>

            <div class="text-center" v-if="form.loading">
              <b-spinner variant="secondary" class="m-5"></b-spinner>
            </div>
          </b-form>
        </b-card>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import api from '../../../api';
import router from '../../../routes.js';

export default {
  name: "page-login",

  data() {
    return {
      form: {
        inputs: {},
        errors: {},
        loading: false,
      },
    };
  },

  methods: {
    login() {
      this.form.loading = true;
      const data = this.form.inputs;
            
      api.post('/login', data)
      .then(response => this.afterSuccessfulLogin(response.data))
      .catch(errors => this.afterErrorLogin())
    },

    afterSuccessfulLogin (response) {
      localStorage.clear();
      localStorage.setItem("token", response.authorisation.token);
      localStorage.setItem("userId", response.user.id);
      router.push({ name: 'home'});
    },

    afterErrorLogin () {
      this.form.loading = false;
      this.form.errors.login = ["Login inválido"];
    },
  },
};
</script>

<style scoped>
</style>