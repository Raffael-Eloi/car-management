<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Visualizar usuário</b-card-title>
    <b-form>
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              type="text"
              v-model="form.inputs.name"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="CPF/CPNJ" label-for="input-document">
            <b-form-input
              id="input-document"
              type="text"
              v-model="form.inputs.document"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="E-mail" label-for="input-email">
            <b-form-input
              id="input-email"
              type="email"
              v-model="form.inputs.email"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Telefone" label-for="input-phone">
            <b-form-input
              id="input-phone"
              type="text"
              v-model="form.inputs.phone"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Endereço" label-for="input-address">
            <b-form-input
              id="input-address"
              type="text"
              v-model="form.inputs.address"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Cidade" label-for="input-city">
            <b-form-input
              id="input-city"
              type="text"
              v-model="form.inputs.city"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Estado" label-for="input-state">
            <b-form-input v-model="form.inputs.state" disabled></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-center" v-if="loading">
        <b-spinner variant="secondary" class="m-5"></b-spinner>
      </div>

      <b-row class="mt-5">
        <b-col class="d-flex justify-content-center">
          <b-button type="button" variant="danger" @click.prevent="close">
            fechar <i class="fa-solid fa-xmark"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: "show-user-component",

  props: {
    active: Boolean,
    user: Object,
    close: { tye: Function },
  },

  data() {
    return {
      loading: false,
      form:{
        inputs: this.user,
        errors: {},
        loading: false
      }
    };
  },

  created() {
    this.$emit("close");
  },
};
</script>

<style scoped></style>