<template>
  <b-card class="m-5" v-if="active">
    <b-card-title class="text-center">Cadastro de clientes</b-card-title>
    <b-form @submit.prevent="storeCustomer()">
      <b-row>
        <b-col>
          <b-form-group label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              type="text"
              v-model="form.inputs.name"
              placeholder="Digite o nome"
              :state="form.errors.name ? !(form.errors.name !== undefined) : null"
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
              :state="form.errors.document ? !(form.errors.document !== undefined) : null"
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
              :state="form.errors.email ? !(form.errors.email !== undefined) : null"
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
              type="text"
              v-maska="'(##) #####-####'"
              v-model="form.inputs.phone"
              placeholder="Digite o telefone"
              :state="form.errors.phone ? !(form.errors.phone !== undefined) : null"
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
          <b-form-group label="Contrato Social" label-for="input-social-contract">
            <b-form-input
              id="input-social-contract"
              type="text"
              v-model="form.inputs.social_contract"
              placeholder="Digite o contrato social"
              :state="form.errors.social_contract ? !(form.errors.social_contract !== undefined) : null"
            >
            </b-form-input>

            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.social_contract"
              :key="index"
            >
              <li class="fs-6">{{ errorMessage }}</li>
            </ul>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group label="Contato" label-for="input-contact">
            <b-form-input
              id="input-contact"
              type="text"
              v-maska="'(##) #####-####'"
              v-model="form.inputs.contact"
              placeholder="Digite o contato"
              :state="form.errors.contact ? !(form.errors.contact !== undefined) : null"
            >
            </b-form-input>
            <ul
              class="text-danger"
              v-for="(errorMessage, index) in form.errors.contact"
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
              :state="form.errors.address ? !(form.errors.address !== undefined) : null"
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
              :state="form.errors.city ? !(form.errors.city !== undefined) : null"
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
              :state="form.errors.state ? !(form.errors.state !== undefined) : null"
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
            @click.prevent="storeCustomer()"
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
  name: "create-customer-component",

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

    storeCustomer() {
      this.form.loading = true;
      const data = this.form.inputs;

      api.post("/customers", data, {
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
      this.showSuccessMessage("Conluído! Cliente cadastrado com sucesso!");
      this.close();
    },

    afterErrorStore(error) {
      this.form.loading = false;
      this.form.errors = error.response.data.errors;
      this.showErrorMessage(
        "Ops! Ocorreu um erro ao cadastrar um novo cliente!"
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
</style>