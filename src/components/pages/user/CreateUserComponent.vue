<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Cadastro de usuários</b-card-title>
    <b-form @submit.prevent="verifyPasswordAndStoreUser()">
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

        <b-col>
          <b-form-group label="Telefone" label-for="input-phone">
            <b-form-input
              id="input-phone"
              v-maska="'(##) #####-####'"
              type="text"
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
          <b-form-group label="Senha" label-for="input-password">
            <b-form-input
              id="input-password"
              type="password"
              v-model="form.inputs.password"
              autocomplete="on"
              placeholder="Digite a senha"
              :class="form.errors.password ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            label="Confirmar senha"
            label-for="input-passwordConfirm"
          >
            <b-form-input
              id="input-passwordConfirm"
              type="password"
              v-model="form.inputs.passwordConfirm"
              autocomplete="on"
              placeholder="Digite a senha novamente"
              :class="form.errors.password ? 'has-error-custom' : ''"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.password"
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
            @click.prevent="verifyPasswordAndStoreUser()"
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
  name: "create-user-component",

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

    verifyPasswordAndStoreUser() {
      if (this.isPasswordValid()) this.storeUser();
    },

    storeUser() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.post("/users", data, {
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
      this.showSuccessMessage("Conluído! Usuário cadastrado com sucesso!");
      this.close();
    },

    afterErrorStore(error) {
      this.form.loading = false;
      this.form.errors = error.response.data.errors;
      this.showErrorMessage(
        "Ops! Ocorreu um erro ao cadastrar um novo usuário!"
      );
    },

    showSuccessMessage(message) {
      this.$toast.success(message);
    },

    showErrorMessage(message) {
      this.$toast.error(message);
    },

    isPasswordValid() {
      if (this.form.inputs.password !== this.form.inputs.passwordConfirm) {
        this.form.errors.password = ["As senhas devem ser iguais"];
        return false;
      } else return true;
    },
  },
};
</script>

<style scoped>
.has-error-custom {
  border-color: red;
}
</style>