<template>
  <b-card class="m-5">
    <b-card-title class="text-center">Cadastro de clientes</b-card-title>
    <b-form @submit.prevent="storeUser()">
        <b-row>
          <b-col>
            <b-form-group label="Nome" label-for="input-name">
              <b-form-input id="input-name" type="text" v-model="form.inputs.name" placeholder="Digite o nome">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="CPF/CPNJ" label-for="input-document">
              <b-form-input id="input-document" type="text" autocomplete="on" v-model="form.inputs.document" placeholder="Digite o documento"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="E-mail" label-for="input-email">
              <b-form-input id="input-email" type="email" autocomplete="on" v-model="form.inputs.email" placeholder="Digite o e-mail"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Telefone" label-for="input-phone">
              <b-form-input id="input-phone" type="text" v-model="form.inputs.phone" placeholder="Digite o telefone">
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Endereço" label-for="input-address">
              <b-form-input id="input-address" type="text" autocomplete="on" v-model="form.inputs.address" placeholder="Digite o endereço"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group label="Cidade" label-for="input-city">
              <b-form-input id="input-city" type="text" v-model="form.inputs.city" placeholder="Digite a cidade">
              </b-form-input>
            </b-form-group>
          </b-col>
          
          <b-col>
            <b-form-group label="Estado" label-for="input-state">
              <b-form-select v-model="form.inputs.state" :options="select.stateOptions"></b-form-select>
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
            <b-button type="submit" variant="success" @click.prevent="storeUser()" :disabled="form.loading">
              Salvar <i class="fa-solid fa-floppy-disk"></i>
            </b-button>
          </b-col>
        </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default { 
  name: 'create-user-component',

  props: {
    active: Boolean,
    close: { tye: Function}
  },

  created() {
    this.$emit('close');
  },

  data() {
    return {
      form: {
        inputs: {},
        errors: {},
        loading: false
      },

      select: {
        stateOptions: [
          {value: null, text: 'Selecione um estado'},
          {value: "AC", text: "AC"},
          {value: "AL", text: "AL"},
          {value: "AP", text: "AP"},
          {value: "AM", text: "AM"},
          {value: "BA", text: "BA"},
          {value: "CE", text: "CE"},
          {value: "DF", text: "DF"},
          {value: "ES", text: "ES"},
          {value: "GO", text: "GO"},
          {value: "MA", text: "MA"},
          {value: "MT", text: "MT"},
          {value: "MS", text: "MS"},
          {value: "MG", text: "MG"},
          {value: "PA", text: "PA"},
          {value: "PB", text: "PB"},
          {value: "PR", text: "PR"},
          {value: "PE", text: "PE"},
          {value: "PI", text: "PI"},
          {value: "RJ", text: "RJ"},
          {value: "RN", text: "RN"},
          {value: "RS", text: "RS"},
          {value: "RO", text: "RO"},
          {value: "RR", text: "RR"},
          {value: "SC", text: "SC"},
          {value: "SP", text: "SP"},
          {value: "SE", text: "SE"},
          {value: "TO", text: "TO"}

        ]
      }
    }
  },

  methods: {
    storeUser() {
      this.form.loading = true;
    }
  }

  
}
</script>

<style scoped>

</style>