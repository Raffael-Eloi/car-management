<template>
  <b-container class="mt-5">
    <b-row>
      <b-col></b-col>
      
      <b-col sm="12" md="6">
          <b-card bg-variant="light">
            <b-card-title class="text-center mb-4">Faça o login para acessar o sistema</b-card-title>
            <b-form @submit.prevent="login()">
              <b-form-group label="E-mail" label-for="input-email">
                <b-form-input id="input-email" type="email" v-model="form.inputs.email" placeholder="Digite seu e-mail">
                </b-form-input>
              </b-form-group>

              <b-form-group label="Senha" label-for="input-senha">
                <b-form-input id="input-senha" type="password" autocomplete="on" v-model="form.inputs.password" placeholder="Digite sua senha" required></b-form-input>
              </b-form-group>

              <div class="d-grid gap-2">
                <b-button type="submit" variant="success" @click.prevent="login()" :disabled="form.loading">Entrar</b-button>
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
export default {
  name: 'page-login',

  data() {
    return {
      form: {
        inputs: {},
        loading: false
      }
    }
  },

  methods: {
    login() {
      this.form.loading = true;
    } 
  }
}
</script>

<style scoped>

</style>