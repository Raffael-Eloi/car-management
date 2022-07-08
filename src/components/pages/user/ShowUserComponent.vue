<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Visualizar usuário</b-card-title>
    <b-form>
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input id="input-name" type="text" v v-model="user.name" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="CPF/CPNJ" label-for="input-document">
            <b-form-input id="input-document" type="text" autocomplete="on" v-model="user.document" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="E-mail" label-for="input-email">
            <b-form-input id="input-email" type="email" autocomplete="on" v-model="user.email" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Telefone" label-for="input-phone">
            <b-form-input id="input-phone" type="text" v-model="user.phone" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Endereço" label-for="input-address">
            <b-form-input id="input-address" type="text" autocomplete="on" v-model="user.address" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group label="Cidade" label-for="input-city">
            <b-form-input id="input-city" type="text" v-model="user.city" disabled>
            </b-form-input>
          </b-form-group>
        </b-col>
        
        <b-col>
          <b-form-group label="Estado" label-for="input-state">
            <b-form-input v-model="user.state" disabled></b-form-input>
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
  name: 'show-user-component',

  props: {
    active: Boolean,
    form: Object,
    close: { tye: Function}
  },

  data() {
    return {
      loading: false,
      user: this.form
    }
  },

  created() {
    this.$emit('close');
  },
  
}
</script>

<style scoped></style>