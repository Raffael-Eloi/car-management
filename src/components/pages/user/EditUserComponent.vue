<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Editar usuário</b-card-title>
    <!-- <b-form @submit.prevent="storeUser()">
        <b-row>
          <b-col>
            <b-form-group label="Nome" label-for="input-name">
              <b-form-input id="input-name" type="text" v-model="form.inputs.name" placeholder="Digite o nome" :class="form.errors.name ? 'has-error-custom' : ''">
              </b-form-input>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.name" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="CPF/CPNJ" label-for="input-document">
              <b-form-input id="input-document" type="text" autocomplete="on" v-model="form.inputs.document" placeholder="Digite o documento" :class="form.errors.document ? 'has-error-custom' : ''">
              </b-form-input>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.document" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="E-mail" label-for="input-email">
              <b-form-input id="input-email" type="email" autocomplete="on" v-model="form.inputs.email" placeholder="Digite o e-mail" :class="form.errors.email ? 'has-error-custom' : ''">
              </b-form-input>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.email" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Telefone" label-for="input-phone">
              <b-form-input id="input-phone" type="text" v-model="form.inputs.phone" placeholder="Digite o telefone" :class="form.errors.phone ? 'has-error-custom' : ''">
              </b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.phone" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Endereço" label-for="input-address">
              <b-form-input id="input-address" type="text" autocomplete="on" v-model="form.inputs.address" placeholder="Digite o endereço" :class="form.errors.address ? 'has-error-custom' : ''">
              </b-form-input>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.address" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group label="Cidade" label-for="input-city">
              <b-form-input id="input-city" type="text" v-model="form.inputs.city" placeholder="Digite a cidade" :class="form.errors.city ? 'has-error-custom' : ''">
              </b-form-input>
              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.city" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
          
          <b-col>
            <b-form-group label="Estado" label-for="input-state">
              <b-form-select v-model="form.inputs.state" :options="select.stateOptions" :class="form.errors.state ? 'has-error-custom' : ''">
              </b-form-select>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.state" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group label="Senha" label-for="input-password">
              <b-form-input id="input-password" type="password" v-model="form.inputs.password" autocomplete="on" placeholder="Digite a senha" :class="form.errors.password ? 'has-error-custom' : ''">
              </b-form-input>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.password" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group label="Confirmar senha" label-for="input-passwordConfirm">
              <b-form-input id="input-passwordConfirm" type="password" v-model="form.inputs.passwordConfirm" autocomplete="on" placeholder="Digite a senha novamente" :class="form.errors.password ? 'has-error-custom' : ''">
              </b-form-input>

              <ul class="text-danger" v-for="(errorMessage, index) in form.errors.password" :key="index">
                <li class="fs-6">{{errorMessage}}</li>
              </ul>
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
              Cadastrar <i class="fa-solid fa-floppy-disk"></i>
            </b-button>
          </b-col>
        </b-row>
    </b-form>
  </b-card> -->
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