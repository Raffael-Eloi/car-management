<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Visualizar proprietário</b-card-title>
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
          <b-form-group label="RG" label-for="input-rg">
            <b-form-input
              id="input-rg"
              type="text"
              v-model="form.inputs.rg"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

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
      </b-row>

      <b-row>
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

        <b-col>
          <b-form-group label="CEP" label-for="input-zip-code">
            <b-form-input
              id="input-zip-code"
              type="zip_code"
              v-model="form.inputs.zip_code"
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
        <b-col>
          <b-form-group label="Bairro" label-for="input-neighborhood">
            <b-form-input
              id="input-neighborhood"
              type="text"
              v-model="form.inputs.neighborhood"
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
            <b-form-input
              v-model="form.inputs.state"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group label="Login BR" label-for="input-login_br">
            <b-form-input
              id="input-login_br"
              type="text"
              v-model="form.inputs.login_br"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha BR" label-for="input-password_br">
            <b-form-input
              id="input-password_br"
              type="text"
              v-model="form.inputs.password_br"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Login BA" label-for="input-login_ba">
            <b-form-input
              id="input-login_ba"
              type="text"
              v-model="form.inputs.login_ba"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha BA" label-for="input-password_ba">
            <b-form-input
              id="input-password_ba"
              type="text"
              v-model="form.inputs.password_ba"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group label="Login GO" label-for="input-login_go">
            <b-form-input
              id="input-login_go"
              type="text"
              v-model="form.inputs.login_go"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha GO" label-for="input-password_go">
            <b-form-input
              id="input-password_go"
              type="text"
              v-model="form.inputs.password_go"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Login MG" label-for="input-login_mg">
            <b-form-input
              id="input-login_mg"
              type="text"
              v-model="form.inputs.login_mg"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha MG" label-for="input-password_mg">
            <b-form-input
              id="input-password_mg"
              type="text"
              v-model="form.inputs.password_mg"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Login SP" label-for="input-login_sp">
            <b-form-input
              id="input-login_sp"
              type="text"
              v-model="form.inputs.login_sp"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha SP" label-for="input-password_sp">
            <b-form-input
              id="input-password_sp"
              type="text"
              v-model="form.inputs.password_sp"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group label="Login PR" label-for="input-login_pr">
            <b-form-input
              id="input-login_pr"
              type="text"
              v-model="form.inputs.login_pr"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha PR" label-for="input-password_pr">
            <b-form-input
              id="input-password_pr"
              type="text"
              v-model="form.inputs.password_pr"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-form-group label="Login PE" label-for="input-login_pe">
            <b-form-input
              id="input-login_pe"
              type="text"
              v-model="form.inputs.login_pe"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha PE" label-for="input-password_pe">
            <b-form-input
              id="input-password_pe"
              type="text"
              v-model="form.inputs.password_pe"
              disabled
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-center" v-if="form.loading">
        <b-spinner variant="secondary" class="m-5"></b-spinner>
      </div>

      <b-row class="mt-5">
        <b-col class="d-flex justify-content-center">
          <b-button
            type="button"
            variant="danger"
            @click.prevent="close"
            :disabled="form.loading"
          >
            Fechar <i class="fa-solid fa-xmark"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: "show-owner-component",

  props: {
    active: Boolean,
    owner: Object,
    close: { tye: Function },
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      form: {
        inputs: this.owner,
        errors: {},
        loading: false,
      },
    };
  },
};
</script>

<style scoped>
</style>