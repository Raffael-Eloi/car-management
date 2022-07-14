<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Cadastro de proprietário</b-card-title>
    <b-form @submit.prevent="storeOwner()">
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              type="text"
              v-model="form.inputs.name"
              placeholder="Digite o nome"
              :class="form.errors.name ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.name"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="CPF/CPNJ" label-for="input-document">
            <b-form-input
              id="input-document"
              type="text"
              v-maska="['###.###.###-##', '##.###.###/###-##']"
              v-model="form.inputs.document"
              placeholder="Digite o documento"
              :class="form.errors.document ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.document"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o RG"
              :class="form.errors.rg ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.rg"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="E-mail" label-for="input-email">
            <b-form-input
              id="input-email"
              type="email"
              v-model="form.inputs.email"
              placeholder="Digite o e-mail"
              :class="form.errors.email ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.email"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group label="Telefone" label-for="input-phone">
            <b-form-input
              id="input-phone"
              type="text"
              v-maska="'(##) #####-####'"
              v-model="form.inputs.phone"
              placeholder="Digite o telefone"
              :class="form.errors.phone ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.phone"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="CEP" label-for="input-zip-code">
            <b-form-input
              id="input-zip-code"
              type="zip_code"
              v-maska="'#####-###'"
              v-model="form.inputs.zip_code"
              placeholder="Digite o CEP"
              :class="form.errors.zip_code ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.zip_code"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o endereço"
              :class="form.errors.address ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.address"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Bairro" label-for="input-neighborhood">
            <b-form-input
              id="input-neighborhood"
              type="text"
              v-model="form.inputs.neighborhood"
              placeholder="Digite o endereço"
              :class="form.errors.neighborhood ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.neighborhood"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite a cidade"
              :class="form.errors.city ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.city"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Estado" label-for="input-state">
            <b-form-select
              v-model="form.inputs.state"
              :options="select.stateOptions"
              :class="form.errors.state ? 'has-error-custom' : ''"
            >
            </b-form-select>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.state"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login BR"
              :class="form.errors.login_br ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_br"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha BR" label-for="input-password_br">
            <b-form-input
              id="input-password_br"
              type="text"
              v-model="form.inputs.password_br"
              placeholder="Digite a senha BR"
              :class="form.errors.password_br ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_br"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login BA"
              :class="form.errors.login_ba ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_ba"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha BA" label-for="input-password_ba">
            <b-form-input
              id="input-password_ba"
              type="text"
              v-model="form.inputs.password_ba"
              placeholder="Digite a senha BA"
              :class="form.errors.password_ba ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_ba"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login GO"
              :class="form.errors.login_go ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_go"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha GO" label-for="input-password_go">
            <b-form-input
              id="input-password_go"
              type="text"
              v-model="form.inputs.password_go"
              placeholder="Digite a senha GO"
              :class="form.errors.password_go ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_go"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login MG"
              :class="form.errors.login_mg ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_mg"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha MG" label-for="input-password_mg">
            <b-form-input
              id="input-password_mg"
              type="text"
              v-model="form.inputs.password_mg"
              placeholder="Digite a senha MG"
              :class="form.errors.password_mg ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_mg"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login SP"
              :class="form.errors.login_sp ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_sp"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha SP" label-for="input-password_sp">
            <b-form-input
              id="input-password_sp"
              type="text"
              v-model="form.inputs.password_sp"
              placeholder="Digite a senha SP"
              :class="form.errors.password_sp ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_sp"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login PR"
              :class="form.errors.login_pr ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_pr"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha PR" label-for="input-password_pr">
            <b-form-input
              id="input-password_pr"
              type="text"
              v-model="form.inputs.password_pr"
              placeholder="Digite a senha PR"
              :class="form.errors.password_pr ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_pr"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
              placeholder="Digite o login PE"
              :class="form.errors.login_pe ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.login_pe"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Senha PE" label-for="input-password_pe">
            <b-form-input
              id="input-password_pe"
              type="text"
              v-model="form.inputs.password_pe"
              placeholder="Digite a senha PE"
              :class="form.errors.password_pe ? 'has-error-custom' : ''"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password_pe"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
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
            Cancelar <i class="fa-solid fa-xmark"></i>
          </b-button>
        </b-col>

        <b-col class="d-flex justify-content-center">
          <b-button
            type="submit"
            variant="success"
            @click.prevent="storeOwner()"
            :disabled="form.loading"
          >
            Cadastrar <i class="fa-solid fa-floppy-disk"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import { states } from "../../utilities/brazilianStates";
import api from "../../../api";

export default {
  name: "create-owner-component",

  props: {
    active: Boolean,
    token: String,
    close: { tye: Function },
  },

  mounted() {
    this.cleanForm();
  },

  created() {
    this.$emit("close");
  },

  data() {
    return {
      form: {
        inputs: {},
        errors: {},
        loading: false,
      },

      select: {
        stateOptions: states,
      },
    };
  },

  methods: {
    cleanForm() {
      this.form.inputs = {};
      this.form.errors = {};
      this.form.loading = false;
    },

    storeOwner() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.post("/owners", data, {
        headers: {
          common: {
            Authorization: `Bearer ${this.token}`,
          }
        }
      })
        .then(response => this.afterSuccessfulStore())
        .catch((error) => this.afterErrorStore(error));
    },

    afterSuccessfulStore() {
      this.showSuccessMessage("Conluído! Proprietário cadastrado com sucesso!");
      this.close();
    },

    afterErrorStore(error) {
      this.form.loading = false;
      this.form.errors = error.response.data.errors;
      this.showErrorMessage(
        "Ops! Ocorreu um erro ao cadastrar um novo proprietário!"
      );
    },

    showSuccessMessage(message) {
      this.$toast.success(message);
    },

    showErrorMessage(message) {
      this.$toast.error(message);
    },
  },
};
</script>

<style scoped>
.has-error-custom {
  border-color: red;
}
</style>