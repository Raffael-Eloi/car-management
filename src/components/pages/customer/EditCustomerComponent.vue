<template>
  <b-card class="m-5">
    <b-card-title class="text-center">Editar usuário</b-card-title>
    <b-form @submit.prevent="updateUser()">
        <b-row>
          <b-col>
            <b-form-group label="Nome" label-for="input-name">
              <b-form-input id="input-name" type="text" v-model="form.name" placeholder="Digite o nome">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="CPF/CPNJ" label-for="input-document">
              <b-form-input id="input-document" type="text" autocomplete="on" v-model="form.document" placeholder="Digite o documento"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="E-mail" label-for="input-email">
              <b-form-input id="input-email" type="email" autocomplete="on" v-model="form.email" placeholder="Digite o e-mail"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Telefone" label-for="input-phone">
              <b-form-input id="input-phone" type="text" v-model="form.phone" placeholder="Digite o telefone">
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Endereço" label-for="input-address">
              <b-form-input id="input-address" type="text" autocomplete="on" v-model="form.address" placeholder="Digite o endereço"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group label="Cidade" label-for="input-city">
              <b-form-input id="input-city" type="text" v-model="form.city" placeholder="Digite a cidade">
              </b-form-input>
            </b-form-group>
          </b-col>
          
          <b-col>
            <b-form-group label="Estado" label-for="input-state">
              <b-form-select v-model="form.state" :options="select.stateOptions"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <div class="text-center" v-if="form.loading">
          <b-spinner variant="secondary" class="m-5"></b-spinner>
        </div>
    
        <b-row class="mt-5">
          <b-col class="d-flex justify-content-center">
            <b-button type="button" variant="danger" @click.prevent="close" :disabled="form.loading">
              Cancelar <i class="fa-solid fa-xmark"></i>
            </b-button>
          </b-col>

          <b-col class="d-flex justify-content-center">
            <b-button type="submit" variant="success" @click.prevent="updateUser()" :disabled="form.loading">
              Editar <i class="fa-solid fa-floppy-disk"></i>
            </b-button>
          </b-col>
        </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default { 
  name: 'edit-user-component',

  props: {
    active: Boolean,
    close: { tye: Function},
    form: Object,
  },

  created() {
    this.$emit('close');
  },

  methods: {
    updateUser() {
    }
  }
}
</script>

<style scoped>

</style>